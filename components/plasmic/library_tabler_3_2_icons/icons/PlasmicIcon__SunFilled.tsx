// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SunFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SunFilledIcon(props: SunFilledIconProps) {
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
          "M12 19a1 1 0 01.993.883L13 20v1a1 1 0 01-1.993.117L11 21v-1a1 1 0 011-1zm6.313-2.09l.094.083.7.7a1 1 0 01-1.32 1.497l-.094-.083-.7-.7a1 1 0 011.218-1.567l.102.07zm-11.306.083a1 1 0 01.083 1.32l-.083.094-.7.7a1 1 0 01-1.497-1.32l.083-.094.7-.7a1 1 0 011.414 0zM4 11a1 1 0 01.117 1.993L4 13H3a1 1 0 01-.117-1.993L3 11h1zm17 0a1 1 0 01.117 1.993L21 13h-1a1 1 0 01-.117-1.993L20 11h1zM6.213 4.81l.094.083.7.7a1 1 0 01-1.32 1.497l-.094-.083-.7-.7A1 1 0 016.11 4.74l.103.07zm12.894.083a1 1 0 01.083 1.32l-.083.094-.7.7a1 1 0 01-1.497-1.32l.083-.094.7-.7a1 1 0 011.414 0zM12 2a1 1 0 01.993.883L13 3v1a1 1 0 01-1.993.117L11 4V3a1 1 0 011-1zm0 5a5 5 0 11-4.995 5.217L7 12l.005-.217A5 5 0 0112 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SunFilledIcon;
/* prettier-ignore-end */
