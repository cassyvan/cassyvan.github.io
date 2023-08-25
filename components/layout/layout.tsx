import React, { ReactNode } from "react";
import MainNavigation from "./main-nav";
import { ThemeProvider } from "./themes-provider";

type childrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  return (
    <React.Fragment>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MainNavigation />
        <main className="divide-y divide-gray-300 dark:divide-gray-700 justify-evenly grid">
          {children}
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
