import React, { useState } from "react";
import { registerComponent } from "@plasmicapp/host";

const TwilioVerify: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const startVerification = async () => {
    if (!phoneNumber) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setStatus(null);

    const accountSid = process.env.NEXT_PUBLIC_TWILIO_SID || ""; // Do NOT expose in frontend
const authToken = process.env.TWILIO_AUTH_TOKEN || "";
const serviceSid = process.env.NEXT_PUBLIC_TWILIO_SERVICE_SID || "";

    const credentials = btoa(`${accountSid}:${authToken}`); // Basic Auth encoding

    try {
      const response = await fetch(
        `https://verify.twilio.com/v2/Services/${serviceSid}/Verifications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${credentials}`,
          },
          body: new URLSearchParams({
            To: phoneNumber,
            Channel: "sms",
          }).toString(),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setStatus("Verification started! Check your phone for the code.");
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus(`Request failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Twilio Phone Verification</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={startVerification}
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          background: loading ? "#ddd" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {loading ? "Sending..." : "Send Verification Code"}
      </button>
      {status && (
        <p style={{ marginTop: "10px", color: status.includes("Error") ? "red" : "green" }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default TwilioVerify;

// Register the component in Plasmic
registerComponent(TwilioVerify, {
  name: "TwilioVerify",
  displayName: "Twilio Phone Verification",
  props: {
    phoneNumber: {
      type: "string",
      defaultValue: "",
      description: "Phone number to send verification code",
    },
  },
});
