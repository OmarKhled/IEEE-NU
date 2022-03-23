import React from "react";
import Link from "next/link";

const Button = ({ type, color, href, children, className }) => {
  return (
    <>
      {type === "button" ? (
        <button className={`btn btn-${color} ${className}`}>{children}</button>
      ) : (
        <Link href={href}>
          <a className={`btn btn-${color} ${className ? className : ""}`}>
            {children}
          </a>
        </Link>
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
