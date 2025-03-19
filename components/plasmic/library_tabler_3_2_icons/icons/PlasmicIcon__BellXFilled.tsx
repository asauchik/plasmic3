// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellXFilledIcon(props: BellXFilledIconProps) {
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
          "M14.235 19c.865 0 1.322 1.024.745 1.668A3.992 3.992 0 0112 22a3.991 3.991 0 01-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006L14.235 19zM12 2c1.358 0 2.506.903 2.875 2.141l.046.171.008.043a8.012 8.012 0 014.024 6.069l.028.287L19 11v2.931l.021.136a3 3 0 001.143 1.847l.167.117.162.099c.86.487.56 1.766-.377 1.864L20 18H4c-1.028 0-1.387-1.364-.493-1.87a3 3 0 001.472-2.063L5 13.924l.001-2.97A8 8 0 018.822 4.5l.248-.146.01-.043a3.003 3.003 0 012.562-2.29l.182-.017L12 2zm-1.489 6.14a1 1 0 00-1.218 1.567L10.585 11l-1.292 1.293-.083.094a1 1 0 001.497 1.32L12 12.415l1.293 1.292.094.083a1 1 0 001.32-1.497L13.415 11l1.292-1.293.083-.094a1 1 0 00-1.497-1.32L12 9.585l-1.293-1.292-.094-.083-.102-.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BellXFilledIcon;
/* prettier-ignore-end */
