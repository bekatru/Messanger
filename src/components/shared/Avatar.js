import React from "react";

const Avatar = ({ name = "Beka", surname = "Amatakhunov", diameter = 23 }) => {
  //data
  const initials =
    name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();

  const circle_style = {
    height: diameter,
    width: diameter,
    borderRadius: "50%",
    backgroundColor: "#007af4",
    position: "relative",
  };

  const small_diameter = 23;

  const avatar_icon_style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: diameter,
    width: diameter,
  };

  // function
  return (
    <span className="avatar_icon" style={avatar_icon_style}>
      <div className="circle" style={circle_style}></div>
      <span
        className="name"
        style={
          diameter === small_diameter
            ? { fontSize: "9px", color: "white", position: "absolute" }
            : { fontSize: "16px", color: "white", position: "absolute" }
        }
      >
        {" "}
        {initials}{" "}
      </span>
    </span>
  );
};

export default Avatar;
