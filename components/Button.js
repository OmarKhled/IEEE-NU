import React from "react";
import Link from "next/link";

const Button = ({
  type,
  color,
  href,
  children,
  className,
  download,
  ...props
}) => {
  return (
    <>
      {type === "button" ? (
        <button {...props} className={`btn btn-${color} ${className}`}>
          {children}
        </button>
      ) : type === "submit" ? (
        <input
          {...props}
          className={`btn btn-${color} ${className}`}
          type="submit"
          value={children}
        />
      ) : type == "link" && download ? (
        <a
          {...props}
          download
          href={href}
          className={`btn btn-${color} ${className ? className : ""}`}
        >
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a
            {...props}
            className={`btn btn-${color} ${className ? className : ""}`}
          >
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
  children: "Click Here",
};

export default Button;
