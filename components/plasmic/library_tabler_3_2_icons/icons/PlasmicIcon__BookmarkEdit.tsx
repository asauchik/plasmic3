// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarkEditIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarkEditIcon(props: BookmarkEditIconProps) {
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
          "M12 17l-6 4V7a4 4 0 014-4h4a4 4 0 014 4v4m.42 4.61a2.1 2.1 0 112.97 2.97L18 22h-3v-3l3.42-3.39z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BookmarkEditIcon;
/* prettier-ignore-end */
