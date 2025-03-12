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

    const accountSid = "AC2b922576fa53a007890683b5bce2db46"; // Replace with your Twilio Account SID
    const authToken = "ce17bde23333c8c022026a6cb9953329"; // Replace with your Twilio Auth Token
    const serviceSid = "VA3d1836520aca64f90f4e093f048bc249"; // Replace with your Twilio Verify Service SID

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
