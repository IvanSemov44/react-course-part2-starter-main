import { useContext } from "react";
import AuthContext from "./authContext";

export const useAuth = () => useContext(AuthContext);

const LoginStatus = () => {
  const { username, dispatch } = useAuth();

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN", userName: "Ivan Semov" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
