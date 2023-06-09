import clsx from "clsx";
import { ComponentPropsWithoutRef, FC, forwardRef } from "react";
import { IconSvgProps } from "../../../assets/icons";
import HelperText from "../FormElements/HelperText";

interface BorderedInput extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  message?: string;
  messageIcon?: FC<IconSvgProps>;
  messageType?: "success" | "error";
}

const BorderedInput = forwardRef<HTMLInputElement, BorderedInput>(
  (props, ref) => {
    const { label, message, messageIcon, messageType, className, ...rest } =
      props;

    return (
      <div className={clsx("relative", className)}>
        <input type="text" ref={ref} className="input-bordered" {...rest} />
        {label && <label className="input-bordered-label">{label}</label>}
        <HelperText
          message={message}
          icon={messageIcon}
          className={clsx("mt-[6px]",{
            "text-neutral-300": !messageType,
            "text-success": messageType === "success",
            "text-error": messageType === "error",
          })}
        />
      </div>
    );
  }
);

export default BorderedInput;
