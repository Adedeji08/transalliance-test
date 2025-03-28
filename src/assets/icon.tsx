import React from "react";
export type IconName =
  | "arrowForwardIcon"
  | "getStartedIcon"
  | "facebookIcon"
  | "xIcon"
  | "igIcon";

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

    case "facebookIcon":
      return (
        <svg
          className={className}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.5"
            cx="20.92"
            cy="20.92"
            r="19.92"
            stroke="#122038"
          />
          <path
            d="M18.9834 18.7065H16.77V20.9198H18.9834V27.5598H22.3034V20.9198H24.3175L24.5167 18.7065H22.3034V17.7846C22.3034 17.2556 22.4096 17.0465 22.9209 17.0465H24.5167V14.2798H21.8563C19.8665 14.2798 18.9834 15.1563 18.9834 16.834V18.7065Z"
            fill="#122038"
          />
        </svg>
      );

    case "xIcon":
      return (
        <svg
          className={className}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.5"
            cx="21.0018"
            cy="20.92"
            r="19.92"
            stroke="#122038"
          />
          <path
            d="M27.6418 17.2181C27.1538 17.435 26.6281 17.5811 26.077 17.6475C26.6403 17.31 27.0708 16.7766 27.2755 16.1402C26.7487 16.4523 26.1655 16.6792 25.5447 16.8009C25.0489 16.2708 24.3395 15.9399 23.5571 15.9399C21.7975 15.9399 20.5049 17.5811 20.9022 19.2854C18.6391 19.1714 16.6305 18.0869 15.287 16.439C14.5732 17.663 14.9174 19.2655 16.1303 20.0767C15.6843 20.0623 15.2649 19.9394 14.8974 19.7358C14.8676 20.9974 15.7728 22.1782 17.0831 22.4416C16.7002 22.5456 16.2797 22.57 15.8525 22.4881C16.1989 23.5704 17.2071 24.3572 18.3978 24.3794C17.2502 25.278 15.8082 25.6797 14.3618 25.5093C15.5681 26.2828 16.999 26.7333 18.5373 26.7333C23.5969 26.7333 26.4544 22.4604 26.2817 18.628C26.8151 18.2451 27.2766 17.7648 27.6418 17.2181Z"
            fill="#122038"
          />
        </svg>
      );

    case "igIcon":
      return (
        <svg
          className={className}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.5"
            cx="21.0018"
            cy="20.92"
            r="19.92"
            stroke="#122038"
          />
          <path
            d="M27.6418 17.2181C27.1538 17.435 26.6281 17.5811 26.077 17.6475C26.6403 17.31 27.0708 16.7766 27.2755 16.1402C26.7487 16.4523 26.1655 16.6792 25.5447 16.8009C25.0489 16.2708 24.3395 15.9399 23.5571 15.9399C21.7975 15.9399 20.5049 17.5811 20.9022 19.2854C18.6391 19.1714 16.6305 18.0869 15.287 16.439C14.5732 17.663 14.9174 19.2655 16.1303 20.0767C15.6843 20.0623 15.2649 19.9394 14.8974 19.7358C14.8676 20.9974 15.7728 22.1782 17.0831 22.4416C16.7002 22.5456 16.2797 22.57 15.8525 22.4881C16.1989 23.5704 17.2071 24.3572 18.3978 24.3794C17.2502 25.278 15.8082 25.6797 14.3618 25.5093C15.5681 26.2828 16.999 26.7333 18.5373 26.7333C23.5969 26.7333 26.4544 22.4604 26.2817 18.628C26.8151 18.2451 27.2766 17.7648 27.6418 17.2181Z"
            fill="#122038"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
