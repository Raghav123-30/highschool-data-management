import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import React from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const isLightTheme = theme === "light";
  return (
    <div>
      <button onClick={toggle}>
        {isLightTheme ? (
          <SunIcon className="w-5 h-5"></SunIcon>
        ) : (
          <MoonIcon className="w-5 h-5"></MoonIcon>
        )}
      </button>
    </div>
  );
};

export default ToggleTheme;
