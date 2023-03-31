import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AppProvider";

const Protectedstudent = ({ children }) => {
  const navigate = useNavigate();

  const { user, Profile } = useContext(AuthContext);
  if (!localStorage.getItem("token")) {
    navigate("/");
  } else {
    if (!user) {
      return;
    } else if (
      user?.Usertype === "teacher" &&
      Profile?.find((teacher) => teacher.email === user.email)
    ) {
      console.log("user");
      return <div>{children}</div>;
    } else {
      navigate("/");
    }
  }
  return;
};
export default Protectedstudent;

;
