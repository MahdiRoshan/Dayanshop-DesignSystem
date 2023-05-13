import { forwardRef } from "react";
import { IconSvgProps } from "..";

const ReturnTwo = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        d="M12.0207 3.27173C11.9378 3.27173 11.8548 3.28195 11.7718 3.28195L12.6224 2.23932C12.8921 1.91222 12.8402 1.42157 12.4979 1.16602C12.4182 1.10356 12.3269 1.05719 12.229 1.02955C12.1311 1.00191 12.0287 0.993547 11.9275 1.00494C11.8264 1.01633 11.7285 1.04725 11.6395 1.09594C11.5504 1.14462 11.472 1.21012 11.4087 1.28868L9.35477 3.81349C9.3444 3.82371 9.3444 3.84416 9.33402 3.85438C9.3029 3.89527 9.28216 3.94638 9.26141 3.99749C9.24066 4.03837 9.21992 4.07926 9.20954 4.13037C9.19917 4.18148 9.19917 4.22237 9.19917 4.27348V4.47791C9.20954 4.50858 9.23029 4.53925 9.24066 4.56991C9.26141 4.62102 9.28216 4.66191 9.3029 4.71302C9.33402 4.75391 9.36514 4.79479 9.40664 4.82546C9.42738 4.8459 9.44813 4.87657 9.46888 4.90723C9.47925 4.91746 9.5 4.91746 9.51037 4.92768C9.54149 4.94812 9.57261 4.95834 9.60373 4.97879C9.6556 5.00945 9.71784 5.0299 9.76971 5.04012C9.80083 5.05034 9.83195 5.05034 9.87344 5.06056C9.90456 5.06056 9.92531 5.07078 9.95643 5.07078C9.98755 5.07078 10.0083 5.06056 10.029 5.05034C10.0602 5.05034 10.0913 5.06056 10.1224 5.05034C10.7863 4.89701 11.4087 4.82546 12 4.82546C16.6577 4.82546 20.444 8.55645 20.444 13.1461C20.444 17.7357 16.6577 21.4667 12 21.4667C7.34232 21.4667 3.55602 17.7357 3.55602 13.1461C3.55602 11.3675 4.1473 9.6502 5.26763 8.17824C5.32894 8.0977 5.37354 8.00605 5.3989 7.90852C5.42425 7.811 5.42987 7.7095 5.41542 7.60984C5.40097 7.51017 5.36674 7.41429 5.31468 7.32766C5.26263 7.24103 5.19377 7.16535 5.11203 7.10494C5.0303 7.04454 4.93729 7.00059 4.83832 6.9756C4.73934 6.95061 4.63634 6.94508 4.5352 6.95932C4.43406 6.97356 4.33675 7.00729 4.24884 7.05858C4.16092 7.10988 4.08412 7.17773 4.02282 7.25827C2.69502 8.996 2 11.0302 2 13.1461C2 18.5739 6.48133 23 12 23C17.5187 23 22 18.5841 22 13.1461C22 7.70803 17.529 3.27173 12.0207 3.27173Z"
        fill="#999999"
      />
      <path
        d="M12.5276 8.13508L15.6631 9.8311C15.8924 9.95617 16.0369 10.2013 16.027 10.4715C16.027 10.7416 15.8874 10.9868 15.6581 11.1119L12.5226 12.8079C12.3581 12.8979 12.1737 12.943 11.9943 12.943C11.8148 12.943 11.6304 12.8979 11.4659 12.8079L8.33044 11.1119C8.10114 10.9868 7.96157 10.7416 7.96157 10.4715C7.96157 10.2013 8.10114 9.95617 8.33044 9.8311L11.4659 8.13508C11.7999 7.95497 12.1986 7.95497 12.5276 8.13508Z"
        fill="black"
      />
      <path
        d="M8.03684 11.9314L10.9529 13.3972C11.3816 13.6124 11.6458 14.0426 11.6408 14.5129V17.2796C11.6408 17.5297 11.5162 17.7599 11.3019 17.8899C11.1872 17.965 11.0576 18 10.928 18C10.8183 18 10.7087 17.975 10.609 17.925L7.69289 16.4641C7.26419 16.2489 7 15.8187 7 15.3384V12.5717C7 12.3216 7.12462 12.0915 7.33897 11.9614C7.55331 11.8313 7.81252 11.8163 8.03684 11.9314Z"
        fill="black"
      />
      <path
        d="M15.9632 11.9313C16.1875 11.8163 16.4467 11.8313 16.661 11.9614C16.8754 12.0914 17 12.3216 17 12.5717V15.3384C17 15.8187 16.7358 16.2489 16.3071 16.4641L13.391 17.9249C13.2913 17.975 13.1817 18 13.072 18C12.9424 18 12.8128 17.965 12.6981 17.8899C12.4838 17.7598 12.3592 17.5297 12.3592 17.2796V14.5129C12.3542 14.0426 12.6184 13.6124 13.0471 13.3972L15.9632 11.9313Z"
        fill="black"
      />
    </svg>
  );
});

ReturnTwo.displayName = "ReturnTwo";

export default ReturnTwo;