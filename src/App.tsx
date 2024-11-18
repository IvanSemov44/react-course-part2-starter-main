import { useReducer } from "react";
import AuthContext from "./state-management/contexts/authContext";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import authReducer from "./state-management/reducers/authReducer";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TaskList from "./state-management/TaskList";

function App() {
  const [username, userDispatch] = useReducer(authReducer, "");
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <AuthContext.Provider value={{ username, userDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <TaskList />
        </TasksContext.Provider>
      </AuthContext.Provider>
      {/* <LoginStatus /> */}
      {/* <TaskList /> */}
      {/* <Counter /> */}
      {/* <TodoForm />
      <TodoList /> */}

      {/* <PostList /> */}
    </>
  );
}

export default App;
