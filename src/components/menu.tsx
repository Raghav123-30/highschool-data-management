"use client";
import { Button } from "./ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { routes } from "@/constants/routes";
import ToggleTheme from "./toggleTheme";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "./ui/use-toast";
const Menu = () => {
  const allRoutes = [routes.MIDDAYMEAL, routes.INVESTMENTPAGE];
  const [isMenuEnabled, setIsMenuEnabled] = useState(false);
  const toggleMenu = () => {
    setIsMenuEnabled((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuEnabled(false);
  };
  const { toast } = useToast();
  const router = useRouter();
  const onLogOut = async () => {
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
  };
  return (
    <div className="relative">
      <Button variant={"ghost"} onClick={toggleMenu}>
        {isMenuEnabled ? (
          <Cross1Icon className="w-[1.5rem] h-[1.5rem]" />
        ) : (
          <HamburgerMenuIcon className="w-[1.5rem] h-[1.5rem]" />
        )}
      </Button>
      {isMenuEnabled && (
        <div className="absolute top-12 right-0 z-40">
          <Card className="p-8">
            <CardContent className="flex flex-col gap-2 justify-center items-start">
              <div className="self-center">
                <ToggleTheme />
              </div>
              <Link href={routes.MIDDAYMEAL}>Meal stock</Link>
              <Link href={routes.INVESTMENTPAGE}>
                {routes.INVESTMENTPAGE.split("/").pop()}
              </Link>

              <Button onClick={onLogOut}>Logout</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Menu;
