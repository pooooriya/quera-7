import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps extends React.PropsWithChildren {}
export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="bg-gray-300 p-2 flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-[calc(100vh-60px)] pt-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
