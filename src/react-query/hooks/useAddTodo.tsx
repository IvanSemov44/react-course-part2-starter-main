import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../Constants";
import todoService, { Todo } from "../services/todoService";


interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,

        //this function is call before a mutation is executed
        onMutate: (newTodo: Todo) => {
            // get todos before the update
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,
                (todos = []) => [newTodo, ...todos]);

            //if (ref.current) ref.current.value = "";
            onAdd();

            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            //APPROACH: invalidating the cache
            // queryClient.invalidateQueries({
            //   queryKey:CACHE_KEY_TODOS  
            // })

            //APPROACH 2: updating the data in the cache
            // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,
            //   todos => [savedTodo, ...(todos || [])]);

            // if (ref.current) ref.current.value = "";

            // core for optimistic update
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map(todo =>
                    todo === newTodo ? savedTodo : todo)
            )
        },
        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
        }
    });
};

export default useAddTodo;