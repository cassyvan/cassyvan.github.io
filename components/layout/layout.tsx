import React, { ReactNode, useEffect, useState } from "react";
import MainNavigation from "./main-nav";
import { ThemeProvider } from "./themes-provider";

type childrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MainNavigation />
      <main className="flex justify-center items-center gap-10 relative h-[40rem]">
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
