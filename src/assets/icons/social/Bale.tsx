import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Bale = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 11.4163C21.1286 13.7306 20.2929 16.1735 18.75 17.9735C18.6536 18.0699 18.5571 18.1824 18.4607 18.2949C18.3643 18.4074 18.2679 18.5199 18.1714 18.6163C16.4357 20.2235 13.9929 21.1235 11.6143 21.0592C9.3 20.9949 7.05 19.9663 5.50714 18.2949C3.9 16.6235 3 14.3735 3 12.0592V4.02346C3 3.31632 3.77143 2.73774 4.41429 3.12346C5.05714 3.50917 6.72857 4.7306 6.72857 4.7306C8.27143 3.63774 10.1357 3.05917 12 3.05917C14.3786 2.99489 16.7571 4.02346 18.4929 5.82346C19.9071 7.30203 20.8714 9.29489 21 11.4163ZM9.49289 16.1091C9.81431 16.4306 10.2643 16.6234 10.7143 16.6234C11.1643 16.6234 11.6143 16.4949 12.0643 16.1091L17.2715 10.902C17.9786 10.1949 17.9786 9.102 17.2715 8.39486C16.5643 7.68772 15.4715 7.68772 14.7643 8.39486L10.7786 12.3806L9.23574 10.8377C8.5286 10.1306 7.43574 10.1306 6.7286 10.8377C6.02146 11.5449 6.02146 12.6377 6.7286 13.3449L9.49289 16.1091Z"
        fill="black"
      />
    </svg>
  );
});

Bale.displayName = "Bale";

export default Bale;
