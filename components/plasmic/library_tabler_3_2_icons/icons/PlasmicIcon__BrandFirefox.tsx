// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandFirefoxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandFirefoxIcon(props: BrandFirefoxIconProps) {
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
        d={"M4.028 7.82a9 9 0 1012.823-3.4C15.215 3.4 13.787 3.4 12 3.4h-1.647"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.914 9.485c-1.756-1.569-.805-5.38.109-6.17.086.896.585 1.208 1.111 1.685.88-.275 1.313-.282 1.867 0 .82-.91 1.694-2.354 2.628-2.093C9.547 4.648 10.559 6.64 12 7.08c-.17.975-1.484 1.913-2.76 2.686-1.296.938-.722 1.85 0 2.234.949.506 3.611-1 4.545.354-1.698.102-1.536 3.107-3.983 2.727 2.523.957 4.345.462 5.458-.34 1.965-1.52 2.879-3.542 2.879-5.557-.014-1.398.194-2.695-1.26-4.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandFirefoxIcon;
/* prettier-ignore-end */
