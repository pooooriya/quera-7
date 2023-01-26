import React from "react";
import PropTypes from "prop-types";

interface FooterProps extends React.PropsWithChildren {}
export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return <h6 className="text-sm">ساخته شده با &#10084; در کئورا بوت کمپ</h6>;
};
