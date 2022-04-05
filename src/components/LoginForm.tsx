import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import clsx from "clsx";

interface FormState {
  email: string;
  password: string;
}

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormState>(initialState);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const updateFormState = (value: string, field: keyof FormState) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!formState.email) {
      return setErrors({ ...errors, email: "Email is required" });
    }
    if (!formState.password) {
      return setErrors({ ...errors, password: "Password is required" });
    }
  };

  useEffect(() => {
    setErrors(initialState);
  }, [formState]);

  useEffect(() => {
    if (errors.email) {
      emailRef.current?.focus();
    }
    if (errors.password) {
      passwordRef.current?.focus();
    }
  }, [errors]);

  return (
    <div className="flex flex-col space-y-6">
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 ">
            Email
          </label>
          <input
            name="email"
            id="email"
            className={clsx(
              "border border-slate-300 rounded-md focus:outline-none focus:ring ",
              errors.email ? "focus:ring-red-500" : "focus:ring-sky-400"
            )}
            type="email"
            placeholder="Your Email"
            ref={emailRef}
            onChange={(event) => updateFormState(event.target.value, "email")}
            value={formState.email}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 ">
            Password
          </label>
          <input
            name="password"
            id="password"
            className={clsx(
              "border border-slate-300 rounded-md focus:outline-none focus:ring ",
              errors.password ? "focus:ring-red-500" : "focus:ring-sky-400"
            )}
            type="password"
            placeholder="Your Email"
            ref={passwordRef}
            onChange={(event) =>
              updateFormState(event.target.value, "password")
            }
            value={formState.password}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        {/* <Input
          label="Email"
          name="email"
          placeholder="Your Email"
          type="email"
          onChange={(event) => updateFormState(event.target.value, "email")}
          value={formState.email}
          error={errors.email}
          ref={emailRef}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Your Password"
          type="password"
          onChange={(event) => updateFormState(event.target.value, "password")}
          value={formState.password}
          error={errors.password}
        /> */}
        <Button type="submit">Login</Button>
      </form>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </div>
  );
};
