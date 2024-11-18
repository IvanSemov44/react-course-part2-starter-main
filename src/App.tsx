import { useReducer } from "react";
import AuthProvider from "./state-management/AuthProvider";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TaskList from "./state-management/TaskList";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <AuthProvider >
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <TaskList />
        </TasksContext.Provider>
      </AuthProvider>
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
