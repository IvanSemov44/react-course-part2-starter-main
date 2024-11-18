import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";


function App() {

  return (
    <>
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>


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
