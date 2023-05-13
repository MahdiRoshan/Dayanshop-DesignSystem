import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Gift = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        d="M19.2 6.99999H18.81C18.9298 6.67992 18.9941 6.34172 19 5.99999C18.979 5.18658 18.637 4.41452 18.0487 3.85242C17.4603 3.29033 16.6735 2.98387 15.86 2.99999C15.0605 3.01726 14.2804 3.24915 13.6013 3.67138C12.9222 4.09361 12.3691 4.69066 12 5.4C11.6308 4.69066 11.0777 4.09361 10.3986 3.67138C9.71954 3.24915 8.93942 3.01726 8.13996 2.99999C7.32644 2.98387 6.53959 3.29033 5.95126 3.85242C5.36293 4.41452 5.02093 5.18658 4.99996 5.99999C5.00587 6.34172 5.07013 6.67992 5.18996 6.99999H4.79996C4.53682 7.02498 4.28124 7.10188 4.048 7.22625C3.81475 7.35062 3.60848 7.51999 3.4411 7.72456C3.27372 7.92914 3.14855 8.16487 3.07283 8.41812C2.99711 8.67137 2.97234 8.93711 2.99996 9.19999V12.8C2.95324 13.2842 3.07774 13.7695 3.35179 14.1715C3.62585 14.5734 4.03212 14.8666 4.49996 15V19.37C4.53083 19.8236 4.737 20.2473 5.07484 20.5516C5.41267 20.8558 5.85563 21.0166 6.30996 21H17.69C18.1508 21.0163 18.5995 20.85 18.9384 20.5373C19.2774 20.2245 19.4792 19.7907 19.5 19.33V15C19.9678 14.8666 20.3741 14.5734 20.6481 14.1715C20.9222 13.7695 21.0467 13.2842 21 12.8V9.19999C21.0276 8.93711 21.0028 8.67137 20.9271 8.41812C20.8514 8.16487 20.7262 7.92914 20.5588 7.72456C20.3914 7.51999 20.1852 7.35062 19.9519 7.22625C19.7187 7.10188 19.4631 7.02498 19.2 6.99999ZM19 9.19999V12.8C19.012 12.8661 19.012 12.9339 19 13H13V8.99999H19C19.012 9.06612 19.012 9.13387 19 9.19999ZM15.86 4.99999C16.1432 4.98349 16.4217 5.07914 16.635 5.26627C16.8483 5.4534 16.9794 5.71697 17 5.99999C16.9794 6.28302 16.8483 6.54659 16.635 6.73372C16.4217 6.92085 16.1432 7.0165 15.86 6.99999H13.4C13.5749 6.46577 13.8999 5.99315 14.3361 5.63853C14.7723 5.2839 15.3013 5.06225 15.86 4.99999ZM6.99996 5.99999C7.0205 5.71697 7.15161 5.4534 7.36493 5.26627C7.57826 5.07914 7.85667 4.98349 8.13996 4.99999C8.69687 5.06406 9.22372 5.28654 9.65798 5.64104C10.0922 5.99554 10.4157 6.46718 10.59 6.99999H8.13996C7.85667 7.0165 7.57826 6.92085 7.36493 6.73372C7.15161 6.54659 7.0205 6.28302 6.99996 5.99999ZM4.99996 9.19999C4.98796 9.13387 4.98796 9.06612 4.99996 8.99999H11V13H4.99996C4.98796 12.9339 4.98796 12.8661 4.99996 12.8V9.19999ZM6.49996 15H11V19H6.49996V15ZM13 19V15H17.5V19H13Z"
        fill="black"
      />
    </svg>
  );
});

Gift.displayName = "Gift";

export default Gift;