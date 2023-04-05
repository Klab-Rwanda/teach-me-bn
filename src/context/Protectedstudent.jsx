import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AppProvider";

const Protectedstudent = ({ children }) => {
  const navigate = useNavigate();

  const { users, Profile } = useContext(AuthContext);
  if (!localStorage.getItem("token")) {
    navigate("/studentdashboard");
  } else {
    if (!users) {
      return;
    } else if (
      users?.Usertype === "users" &&
      Profile?.find((users) => users.id === users.parentId)
    ) {
      console.log("users");
      return <div>{children}</div>;
    } else {
      navigate("/");
    }
  }
  return;
};

export default Protectedstudent;
