import React from "react";

const Avatar = ({ data: { name, surname }, size }) => {
  const initials = `${name[0]}${surname ? surname[0] : ""}`;
  return <span className={`avatar-${size}`}>{initials}</span>;
};

export default Avatar;
