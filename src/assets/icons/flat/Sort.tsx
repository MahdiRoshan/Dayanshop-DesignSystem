import React from "react";
import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Sort = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      viewBox="0 0 21 12"
      fill={color}
      strokeWidth={strokeWidth}
      className={className}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.29019 8.29L5.00019 8.59V1C5.00019 0.734784 4.89483 0.48043 4.70729 0.292893C4.51976 0.105357 4.2654 0 4.00019 0C3.73497 0 3.48062 0.105357 3.29308 0.292893C3.10554 0.48043 3.00019 0.734784 3.00019 1V8.59L2.71019 8.29C2.52188 8.1017 2.26649 7.99591 2.00019 7.99591C1.73388 7.99591 1.47849 8.1017 1.29019 8.29C1.10188 8.4783 0.996094 8.7337 0.996094 9C0.996094 9.2663 1.10188 9.5217 1.29019 9.71L3.29019 11.71C3.38529 11.801 3.49743 11.8724 3.62019 11.92C3.73989 11.9729 3.86931 12.0002 4.00019 12.0002C4.13106 12.0002 4.26049 11.9729 4.38019 11.92C4.50294 11.8724 4.61508 11.801 4.71019 11.71L6.71019 9.71C6.80342 9.61676 6.87738 9.50607 6.92785 9.38425C6.97831 9.26243 7.00428 9.13186 7.00428 9C7.00428 8.86814 6.97831 8.73757 6.92785 8.61575C6.87738 8.49393 6.80342 8.38324 6.71019 8.29C6.61695 8.19676 6.50626 8.1228 6.38443 8.07234C6.26261 8.02188 6.13204 7.99591 6.00019 7.99591C5.86833 7.99591 5.73776 8.02188 5.61594 8.07234C5.49411 8.1228 5.38342 8.19676 5.29019 8.29ZM10.0002 2H20.0002C20.2654 2 20.5198 1.89464 20.7073 1.70711C20.8948 1.51957 21.0002 1.26522 21.0002 1C21.0002 0.734784 20.8948 0.48043 20.7073 0.292893C20.5198 0.105357 20.2654 0 20.0002 0H10.0002C9.73497 0 9.48061 0.105357 9.29308 0.292893C9.10554 0.48043 9.00019 0.734784 9.00019 1C9.00019 1.26522 9.10554 1.51957 9.29308 1.70711C9.48061 1.89464 9.73497 2 10.0002 2ZM20.0002 5H10.0002C9.73497 5 9.48061 5.10536 9.29308 5.29289C9.10554 5.48043 9.00019 5.73478 9.00019 6C9.00019 6.26522 9.10554 6.51957 9.29308 6.70711C9.48061 6.89464 9.73497 7 10.0002 7H20.0002C20.2654 7 20.5198 6.89464 20.7073 6.70711C20.8948 6.51957 21.0002 6.26522 21.0002 6C21.0002 5.73478 20.8948 5.48043 20.7073 5.29289C20.5198 5.10536 20.2654 5 20.0002 5ZM20.0002 10H10.0002C9.73497 10 9.48061 10.1054 9.29308 10.2929C9.10554 10.4804 9.00019 10.7348 9.00019 11C9.00019 11.2652 9.10554 11.5196 9.29308 11.7071C9.48061 11.8946 9.73497 12 10.0002 12H20.0002C20.2654 12 20.5198 11.8946 20.7073 11.7071C20.8948 11.5196 21.0002 11.2652 21.0002 11C21.0002 10.7348 20.8948 10.4804 20.7073 10.2929C20.5198 10.1054 20.2654 10 20.0002 10Z" />
    </svg>
  );
});

Sort.displayName = "Sort";

export default Sort;