import React from "react";

interface ITextAreaField {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}
const TextAreaField = ({ label, value, onChange, rows }: ITextAreaField) => {
  return (
    <div>
      <p className="text-medium font-bold text-black text-md">{label}</p>
      <textarea
        className="bg-[#F5F7FB] py-2 w-full rounded-md p-4"
        value={value}
        onChange={onChange}
        rows={rows || 4}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
