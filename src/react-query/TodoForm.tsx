import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then(res => res.data),

    //this function is call before a mutation is executed
    onMutate: (newTodo: Todo) => {
      // get todos before the update
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      queryClient.setQueryData<Todo[]>(["todos"],
        todos => [newTodo, ...(todos || [])]);

      if (ref.current) ref.current.value = "";

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      //APPROACH: invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey:["todos"]  
      // })

      //APPROACH 2: updating the data in the cache
      // queryClient.setQueryData<Todo[]>(["todos"],
      //   todos => [savedTodo, ...(todos || [])]);

      // if (ref.current) ref.current.value = "";

      // core for optimistic update
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map(todo =>
          todo === newTodo ? savedTodo : todo)
      )
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos)
    }
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error &&
        <div className="alert alert-danger">
          {addTodo.error.message}
        </div>}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1
            })
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button
            disabled={addTodo.isLoading}
            className="btn btn-primary"
          >
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
