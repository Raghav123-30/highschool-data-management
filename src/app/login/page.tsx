"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import axios, { isAxiosError } from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";
const LoginPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onLogin = async () => {
    try {
      const domain = process.env.PRODUCTION_URL || "";
      const url = domain + "/api/users/login";

      const response = await axios.post(url, user);
      if (response.status == 200) {
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.message);
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center w-[450px] mx-auto p-4">
      <Card>
        <CardHeader className="flex justify-center items-center">
          <CardTitle>Login to continue!</CardTitle>
          <CardDescription>We missed you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Input
            placeholder="Email"
            value={user.userName}
            onChange={(e) =>
              setUser({
                ...user,
                userName: e.target.value,
              })
            }
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          ></Input>
          <Button onClick={onLogin}>Login</Button>
          <div>
            {error ?? <h1 className="text-sm text-red-500">{errorMessage}</h1>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
