import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Highschool data management",
  description:
    "App to manage highschool date to efficiently utilize mid day meal stock and other food accomodities provided in government highschools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          <div className="max-w-[70rem] mx-auto p-4">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
