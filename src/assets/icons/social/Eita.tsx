import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Eita = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        d="M22 9.99846V11.7099C21.3339 12.2415 20.7151 12.8734 20.1834 13.5432C19.3627 14.5782 18.6553 15.7522 17.8565 16.8043C17.1194 17.7796 16.2789 18.7204 15.3832 19.5461C14.6932 20.1789 13.9372 20.7794 13.107 21.2084C11.5538 22.0206 9.72852 22.1412 8.02528 21.8689C5.6864 21.4979 3.52683 20.1961 2.59359 17.9006C1.34996 14.7983 2.20364 11.0229 3.83063 8.2265C5.46587 5.428 8.28373 2.70851 11.5113 2.10385C13.2298 1.7803 15.0555 2.20806 16.3367 3.45351C17.4711 4.53131 17.9913 6.05493 17.9636 7.61596C17.9467 8.73493 17.711 9.89089 17.1104 10.8414C15.9422 12.6927 13.7327 13.2961 11.912 14.2491C10.1407 15.1702 8.74005 16.4766 8.63699 18.6221C8.03641 18.2628 7.52527 17.7246 7.2396 17.0733C6.6588 15.7585 6.87851 14.0718 7.90409 13.0474C6.91726 12.5184 6.84017 11.3435 7.21693 10.3829C7.47209 9.71819 8.0092 9.17025 8.67121 8.93116C8.45851 9.71987 8.83733 10.6174 9.52737 11.0258C9.97997 11.2948 10.5299 11.3107 11.0398 11.2834C12.4388 11.2006 13.8576 10.8393 15.067 10.1035C15.4854 9.82492 16.1693 9.30976 16.0786 8.73703C16.0234 8.43407 15.8268 8.17229 15.6363 7.94161C15.2002 7.42183 14.5951 7.06592 13.9644 6.84868C12.7137 6.4037 11.4689 6.52723 10.2269 6.9281C8.7013 7.40166 7.24867 8.20171 6.10314 9.34169C5.48813 9.95097 4.95431 10.6863 4.6905 11.5259C4.17771 13.1676 4.70864 14.624 6.14107 15.5375C5.9667 16.4619 6.31048 17.414 6.88881 18.1246C7.48734 18.8776 8.34927 19.4112 9.27592 19.6226C9.25201 18.7276 9.49645 17.8212 9.96266 17.0628C12.088 17.8334 14.3832 17.0233 16.0592 15.6089C17.2039 14.6626 18.1611 13.4646 19.1805 12.386C20.0202 11.4889 20.9637 10.6527 22 9.99846Z"
        fill="black"
      />
    </svg>
  );
});

Eita.displayName = "Eita";

export default Eita;