import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoginStatus } from "../services/authServices";
import { SET_LOGIN } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

function useRedirectLoggedOutUser(path) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectLogoutUser = async () => {
      const isLoggedin = await getLoginStatus();
      dispatch(SET_LOGIN(isLoggedin));

      if (!isLoggedin) {
        toast.info("Session expired. Please log in to continue");
        navigate(path);
        return;
      }
    };

    redirectLogoutUser();
  }, [navigate, path, dispatch]);
}

export default useRedirectLoggedOutUser;
