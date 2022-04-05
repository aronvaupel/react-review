import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  error: string;
}

export const Input = ({ label, name, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 ">
        {label}
      </label>
      <input
        name={name}
        id={name}
        className="border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-sky-400"
        {...props}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
