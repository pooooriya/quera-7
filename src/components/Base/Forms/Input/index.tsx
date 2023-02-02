import cs from "classnames";
import React, { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    React.PropsWithChildren {
  variant?: "primary" | "secondary" | "info";
}

const { BaseTheme, PrimaryTheme } = {
  BaseTheme:
    "bg-gray-200 p-1 w-full rounded-md placeholder:p-1 placeholder:text-sm outline-none border-none",
  PrimaryTheme: "",
};

export const Input: React.FunctionComponent<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  switch (props.variant) {
    case "primary":
      return (
        <input ref={ref} className={cs(BaseTheme, PrimaryTheme)} {...props} />
      );
    case "secondary":
      return <input ref={ref} className={cs(BaseTheme)} {...props} />;
    case "info":
      return <input ref={ref} className={cs(BaseTheme)} {...props} />;
    default:
      return <input ref={ref} className={cs(BaseTheme)} {...props} />;
  }
});
