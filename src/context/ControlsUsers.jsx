import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AppProvider";

const ControlsUsers = ({children}) => {
  const navigate = useNavigate();

  const { user, Profile } = useContext(AuthContext);
  console.log(Profile);
  if (!localStorage.getItem("token")) {
    navigate("/");
  } else {
    if (!user) {
      return;
    } else if (
      user?.Usertype === "teacher" &&
      Profile?.find((teacher) => teacher.email === user.email)
    ) {
      navigate("/TeacherDashboard");
    } else {
        console.log(Profile?.find((teacher) => teacher.email === user.email));
      return <div>{children}</div>;
    }
  }
  return;
};

export default ControlsUsers;
