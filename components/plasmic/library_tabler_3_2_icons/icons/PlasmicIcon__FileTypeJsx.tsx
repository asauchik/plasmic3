// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileTypeJsxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileTypeJsxIcon(props: FileTypeJsxIconProps) {
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
          "M5 12V5a2 2 0 012-2h7l5 5v4M4 15h3v4.5a1.5 1.5 0 01-3 0m6 .75c0 .414.336.75.75.75H12a1 1 0 001-1v-1a1 1 0 00-1-1h-1a1 1 0 01-1-1v-1a1 1 0 011-1h1.25a.75.75 0 01.75.75m3-.75l4 6m-4 0l4-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileTypeJsxIcon;
/* prettier-ignore-end */
