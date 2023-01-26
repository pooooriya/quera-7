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
  PrimaryTheme: "bg-red",
};

export const Input: React.FunctionComponent<InputProps> = (props) => {
  switch (props.variant) {
    case "primary":
      return <input className={cs(BaseTheme, PrimaryTheme)} {...props} />;
    case "secondary":
      return <input className={cs(BaseTheme)} {...props} />;
    case "info":
      return <input className={cs(BaseTheme)} {...props} />;
    default:
      return <input className={cs(BaseTheme)} {...props} />;
  }
};
