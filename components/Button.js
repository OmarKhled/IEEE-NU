import React from "react";
import Link from "next/link";

const Button = ({ type, color, href, children, className }) => {
  return (
    <>
      {type === "button" ? (
        <button className={`btn-${color} ${className}`}>{children}</button>
      ) : (
        <Link href={href} className={`btn-${color} ${className}`}>
          {children}
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
