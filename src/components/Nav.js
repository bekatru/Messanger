import React from "react";
import Avatar from "./Avatar";

const Nav = ({ user }) => {
  const { name, surname, company, notifications } = user;
  const username = `${name} ${surname[0]}.`;
  const avatar = <Avatar data={user} size={"large"} />;
  return <></>;
};

export default Nav;
