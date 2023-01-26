import React from "react";
import PropTypes from "prop-types";

interface HeaderProps extends React.PropsWithChildren {}
export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <>
      <h2 className="self-start font-bold">پروژه ی تمرینی پیام رسان تلگرام</h2>
    </>
  );
};
