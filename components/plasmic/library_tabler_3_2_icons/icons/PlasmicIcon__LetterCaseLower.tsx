// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterCaseLowerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterCaseLowerIcon(props: LetterCaseLowerIconProps) {
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
        d={
          "M3 15.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm7-3.5v7m4-3.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm7-3.5v7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LetterCaseLowerIcon;
/* prettier-ignore-end */
