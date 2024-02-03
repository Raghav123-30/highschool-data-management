"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "@/constants/routes";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import ToggleTheme from "./toggleTheme";

import { useToast } from "./ui/use-toast";
import { isAxiosError } from "axios";
import axios from "axios";
import Menu from "./menu";
const Header = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isPublicPath, setIsPublicPath] = useState(false);
  const { toast } = useToast();
  const path = usePathname();
  const onLogOut = async () => {
    try {
      const domain = process.env.PRODUCTION_URL || "";
      const url = domain + "/api/users/logout";
      const response = await axios.post(url);
      if (response.status == 200) {
        toast({
          title: "Goodbye",
          description: "See you soon",
        });
        setTimeout(() => {
          router.push(routes.LOGINPAGE);
        }, 2000);
      }
    } catch (error) {
      if (isAxiosError(error)) {
      }
    }
  };

  useEffect(() => {
    if (path === routes.LOGINPAGE) {
      setIsPublicPath(true);
    } else {
      setIsPublicPath(false);
    }
    setMounted(true);
  }, [path]);
  if (!mounted || isPublicPath) {
    console.log(isPublicPath);
    return null;
  }
  return (
    <nav className="header">
      <div>
        <Link
          href={routes.HOME}
          className="font-bold text-lg border-b-2 border-blue-600 uppercase pb-2"
        >
          Home
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-5">
        <Link href={routes.MIDDAYMEAL}>Mid-day-meal</Link>
        <Link href={routes.INVESTMENTPAGE}>Investment</Link>
        <Button onClick={onLogOut}>Logout</Button>
        <ToggleTheme />
      </div>
      <div className="flex md:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
