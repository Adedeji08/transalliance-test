import React from "react";
export type IconName = "arrowForwardIcon" | "getStartedIcon";

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case "arrowForwardIcon":
      return (
        <svg
          className={className}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 36.6668C29.2048 36.6668 36.6667 29.2049 36.6667 20.0002C36.6667 10.7954 29.2048 3.3335 20 3.3335C10.7953 3.3335 3.33337 10.7954 3.33337 20.0002C3.33337 29.2049 10.7953 36.6668 20 36.6668Z"
            fill="#122038"
          />
          <path
            d="M17.7778 26.6668L24.4445 20.0002L17.7778 13.3335"
            stroke="#32B477"
            stroke-width="3.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "getStartedIcon":
      return (
        <svg
          className={className}
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 15.5L15 1.5"
            stroke="#0F0F0F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 1.5L15 1.5L15 15.5"
            stroke="#0F0F0F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
