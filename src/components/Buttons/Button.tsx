import React from "react";

interface IButton {
  children?: JSX.Element | String;
  type?: "default" | "primary" | "danger" | "danger-solid";
  onClick?: (ev: any) => void;
}
const Button = ({ children, type, onClick }: IButton) => {
  // Styling
  let style = "";
  switch (type) {
    case "primary":
      style =
        "bg-[#3184FE] hover:bg-[#2975E4] text-white text-sm font-semibold px-8 py-2 rounded-md w-fulltransition";
      break;
    case "danger":
      style =
        "bg-white sm:bg-transparent hover:bg-[#E30808] text-[#E30808] hover:text-white text-sm font-semibold px-8 py-2 rounded-md transition";
      break;
    default:
      style =
        "bg-white hover:bg-[#3184FE] text-[#3184FE] hover:text-white text-black text-sm font-semibold px-8 py-2 rounded-md transition";
      break;
  }
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
