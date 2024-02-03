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
const LoginPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const onLogin = async () => {
    try {
      const domain = process.env.PRODUCTION_URL || "";
      const url = domain + "/api/users/login";

      const response = await axios.post(url);
      if (response.status == 200) {
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      if (isAxiosError(error)) {
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
          <Input placeholder="Email"></Input>
          <Input placeholder="Password" type="password"></Input>
          <Button onClick={onLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
