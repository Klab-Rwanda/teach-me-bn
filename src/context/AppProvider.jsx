import { createContext, useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import axios from "axios";

export const AuthContext = createContext({});

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);
  const [Profile, setTeachers] = useState([]);
  const [user, setUser] = useState();

  const [isLoged, setIsLoged] = useState(false);

  //     fetchin all users from api
  useEffect(() => {
    axios
      .get("https://teachmeapi.onrender.com/api/v1/users")
      .then((response) => {
        console.log(response.data.data.users);
        setUsers(response.data.data.users);
      })
      .catch((error) => console.log(error));
  }, []);

  //     getting one user by id from aip
  // feching approved teachers on

  async function ApprovedTeachres() {
    try {
      const response = await axios.get(
        `https://teachmeapi.onrender.com/api/v1/getAllprofile`
      );

      setTeachers(response.data.Profile.filter((t) => t.status === "approved"));
    } catch (error) {}
  }
  useEffect(() => {
    ApprovedTeachres();
  }, []);
  console.log(Profile);
  //  getting all student account created by his/her parent 

   async function getStudentAccount(){

    try {
        const response = await axios.get(`https://teachmeapi.onrender.com/users`)
        
    } catch (error) {
      
    }
   }



  async function GetOneUser() {
    if (decodedToken) {
      try {
        const response = await axios.get(
          `https://teachmeapi.onrender.com/api/v1/GetOneUser/${decodedToken?.id}`
        );
        console.log(response.data.data.user);
        setUser(response.data.data.user);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    GetOneUser();
  }, [decodedToken]);
  console.log(user);

  return (
    <AuthContext.Provider value={{ isLoged, setIsLoged, user,Profile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppProvider;
