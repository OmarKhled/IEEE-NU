import React from "react";
import Link from "next/link";

const Button = ({ type, color, href, children, className }) => {
  return (
    <>
      {type === "button" ? (
        <button className={`btn btn-${color} ${className}`}>{children}</button>
      ) : (
        <a
          href={href}
          className={`btn btn-${color} ${className ? className : ""}`}
        >
          {children}
        </a>
      )}
    </>
  );
};

Button.defaultProps = {
  type: "button",
  href: "#",
  color: "primary",
  children: "",
};

export default Button;
