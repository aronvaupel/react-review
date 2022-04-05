import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Link } from "react-router-dom";

interface ButtonBaseProps {
  label: string;
}

interface LinkButtonProps extends ButtonBaseProps {
  to: string;
}

const LinkButton = ({ to, label }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className="bg-slate-300 hover:bg-slate-400 hover:text-slate-200 transition-colors text-slate-700 px-4 py-2 rounded-md"
    >
      {label}
    </Link>
  );
};

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const CustomButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-300 hover:bg-slate-400 hover:text-slate-200 transition-colors text-slate-700 px-4 py-2 rounded-md"
    >
      {children}
    </button>
  );
};

export const Button = Object.assign(CustomButton, {
  Link: LinkButton,
});
