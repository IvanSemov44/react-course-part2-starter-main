import { useReducer } from "react";
import authReducer from "./reducers/authReducer";

const LoginStatus = () => {
  const [state, dispatch] = useReducer(authReducer, "")

  if (state)
    return (
      <>
        <div>
          <span className="mx-2">{state}</span>
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
