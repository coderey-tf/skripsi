/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { useRef } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div className="flex justify-center items-center mt-48">
      <Card color="white" shadow={true} className="shadow-2xl p-5">
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to sign in.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              onChange={(e) => (userName.current = e.target.value)}
              required
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={(e) => (pass.current = e.target.value)}
              required
            />
          </div>

          <Button className="mt-6" fullWidth onClick={onSubmit}>
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
