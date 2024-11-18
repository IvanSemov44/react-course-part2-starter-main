import useAuthStore from "./store";

const LoginStatus = () => {
  // const { username, dispatch } = useAuth();
  const { username, login, logout } = useAuthStore();

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Ivan Semov")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
