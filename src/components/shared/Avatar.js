import React from "react";
import "./Avatar.scss";

const Avatar = ({ name = "Beka", surname = "Amatakhunov", diameter = 40 }) => {
  //data
  const initials =
    name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
  // function
  return (
    <span className="circle">
      <svg height={diameter} width={diameter}>
        <circle cx="50%" cy="50%" r={diameter / 2} fill="#007AF4" />
      </svg>
      <span className="name"> {initials} </span>
    </span>
  );
};

export default Avatar;
