import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";


function App() {

  return (
    <>
      <AuthProvider >
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>


      {/* <LoginStatus /> */
      /* <TaskList /> */
      /* <Counter /> */
      /* <TodoForm /> */
      /* <TodoList /> */
      /* <PostList /> */}
    </>
  );
}

export default App;
