import { useSelector } from "react-redux";
import { selectIsLoggedin } from "../../redux/features/auth/authSlice";

export const ShowOnLogin = ({ children }) => {
  const isLoggedin = useSelector(selectIsLoggedin);

  if (isLoggedin) {
    return <>{children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedin = useSelector(selectIsLoggedin);

  if (!isLoggedin) {
    return <>{children}</>;
  }
  return null;
};
