import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UserActionTypes } from "../../@types/context/context.types";
import { AppContext } from "../../context/store";

interface LayoutProps extends React.PropsWithChildren {}
export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): JSX.Element => {
  const { dispatch } = useContext(AppContext);
  const getToken = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  useEffect(() => {
    dispatch({
      type: UserActionTypes.Login_Success,
      payload: {
        username: username,
        token: getToken,
      },
    });
  }, []);

  return (
    <div className="bg-gray-300 p-2 flex flex-col justify-center items-center max-w-7xl mx-auto">
      <Header />
      <div className="w-full h-[calc(100vh-60px)] pt-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
