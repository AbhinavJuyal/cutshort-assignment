import React from "react";

const User = (props: any) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 89.000000 90.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
        fill={props.color || "#000000"}
        stroke="none"
      >
        <path
          d="M344 716 c-74 -41 -106 -150 -65 -221 10 -16 35 -42 57 -57 105 -73
244 6 244 138 0 62 -44 134 -82 134 -10 0 -18 5 -18 10 0 14 -110 11 -136 -4z"
        />
        <path
          d="M319 348 c-46 -25 -62 -41 -82 -82 -34 -69 -37 -82 -24 -95 7 -7 77
-11 214 -11 239 0 235 -2 184 96 -28 53 -40 66 -90 93 -78 41 -127 41 -202 -1z"
        />
      </g>
    </svg>
  );
};

export default User;
