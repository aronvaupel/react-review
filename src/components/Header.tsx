import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="bg-slate-600 text-slate-100 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <Logo className="h-12 w-12 mr-8" />
        </Link>
        <h1 className="font-semibold text-lg">Awesome Site</h1>
      </div>
      <Button.Link label="Login" to="/login" />
    </header>
  );
};
