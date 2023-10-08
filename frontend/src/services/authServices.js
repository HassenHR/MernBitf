import axios from "axios";
import { toast } from "react-toastify";

// REGISTER USER
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/register",
      userData,
      {
        withCredentials: true,
      }
    );
    if (response.statusText === "OK") {
      toast.success("User Registered Successfully");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

// LOGIN USER
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/login",
      userData
    );

    if (response.statusText === "OK") {
      toast.success("User Loggedin Successfully");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

// LOGOUT USER
export const logoutUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/auth/logout");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

// GET LOGIN STATUS
export const getLoginStatus = async () => {
  try {
    const respones = await axios.get("http://localhost:5000/auth/loggedin");

    return respones.data;
  } catch (error) {
    console.log(error);
  }
};
