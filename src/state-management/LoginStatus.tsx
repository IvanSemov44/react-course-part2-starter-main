import { useContext } from "react";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  const { username, userDispatch } = useContext(AuthContext);

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => userDispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => userDispatch({ type: "LOGIN", userName: "Ivan Semov" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
