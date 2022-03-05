import React from "react";

interface ITextField {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextField = ({ label, value, onChange }: ITextField) => {
  return (
    <div>
      <p className="text-medium font-bold text-black text-md">{label}</p>
      <input
        className="bg-[#F5F7FB] py-2 w-full rounded-md p-4"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default TextField;
