// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileTypeDocxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileTypeDocxIcon(props: FileTypeDocxIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M14 3v4a1 1 0 001 1h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 12V5a2 2 0 012-2h7l5 5v4M2 15v6h1a2 2 0 002-2v-2a2 2 0 00-2-2H2zm15 1.5a1.5 1.5 0 10-3 0v3a1.5 1.5 0 103 0M9.5 15a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 11-3 0v-3A1.5 1.5 0 019.5 15zm10 0l3 6m-3 0l3-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileTypeDocxIcon;
/* prettier-ignore-end */
