import React from "react";

const MembersCard = ({
  name,
  position,
  school,
  img,
  className,
  facebook,
  twitter,
  linkedin,
}) => {
  const socialLinks = [
    { val: facebook, img: "/images/icons/Facebook.webp" },
    { val: twitter, img: "/images/icons/Twitter.webp" },
    { val: linkedin, img: "/images/icons/Linkedin.webp" },
  ];
  return (
    <div className={`member-card board ${className ? className : ""}`}>
      <div className="top-section">
        <img src={img} alt={name} className="member-img" />
      </div>
      <img
        src="/images/Waves.svg"
        alt="waves bottom"
        className="waves"
        style={{ userSelect: "none" }}
      />
      <div className="body">
        <h5 className="bold">{name}</h5>
        <p>{position}</p>
        <small>{school}</small>
      </div>
      <div className="tail gap-h-dot5">
        {socialLinks.map((link) =>
          link.val ? (
            <a
              key={
                link.img
                  .split("/")
                  [link.img.split("/").length - 1].split(".")[0]
              }
              href={link.val}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link.img}
                className="social-link"
                alt={`${
                  link.img
                    .split("/")
                    [link.img.split("/").length - 1].split(".")[0]
                } Profile Link of ${name}`}
                width="23"
              />
            </a>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

MembersCard.defaultProps = {
  name: "Youssef Nasser",
  position: "Chairman",
  school: "Faculty Of Engineering",
};

export default MembersCard;
