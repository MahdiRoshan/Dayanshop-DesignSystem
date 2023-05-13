import { forwardRef } from "react";
import { IconSvgProps } from "..";

const NotFoundIcon = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
  const {
    className,
    size = 24,
    color = "currentColor",
    strokeWidth = 1,
  } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      strokeWidth={strokeWidth}
      className={className}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.375 12.4825L15.3005 12.8612L14.9305 12.6762L11 10.919L4.29479 14.341C3.92485 14.5259 3.73988 14.8959 3.73988 15.2658C3.73988 15.8207 4.2023 16.2832 4.75721 16.2832H7.625L7.375 16.7325L7.71673 16.9305H4.75721C3.83236 16.9305 3 16.1907 3 15.1733C3 14.5259 3.36994 13.8785 3.92485 13.6011L10.8612 10.1792V9.71673C10.8612 9.2543 11.1387 8.79188 11.6936 8.69939C12.341 8.51442 12.8034 7.86703 12.7109 7.21964C12.7109 6.47976 12.0635 5.83236 11.2312 5.83236C10.8612 5.83236 10.4913 5.92485 10.1213 6.29479C10.0288 6.47976 9.84388 6.8497 9.84388 7.21964C9.84388 7.40461 9.65891 7.58958 9.47394 7.58958C9.28897 7.58958 9.104 7.40461 9.104 7.21964C9.104 6.66473 9.38146 6.01733 9.75139 5.64739C10.2138 5.18497 10.7687 5 11.3236 5C12.4335 5 13.4508 6.01733 13.4508 7.12715C13.4508 8.14449 12.8034 9.06933 11.8785 9.34679C11.6936 9.34679 11.6011 9.53176 11.6011 9.71673V10.3641L15.4855 12.2138L15.8554 12.3988L15.375 12.4825Z"
        fill="black"
      />
      <path
        d="M20.9421 17.4854C20.7571 18.4102 19.8322 18.9651 18.9074 18.7802L9.104 16.5605L9.53897 16.3756L9.19649 15.8206L17.0577 17.6703L17.7976 17.8553L18.9999 18.1328C19.5548 18.2253 20.1097 17.9478 20.2022 17.3929C20.2947 17.0229 20.1097 16.653 19.8322 16.3756L17.4276 14.4334L17.875 14.4824L18.075 13.9709L20.3872 15.8206C20.8496 16.1906 21.127 16.838 20.9421 17.4854Z"
        fill="black"
      />
    </svg>
  );
});

NotFoundIcon.displayName = "NotFoundIcon";

export default NotFoundIcon;