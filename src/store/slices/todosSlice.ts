// #region Global Imports
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
// #endregion Global Imports

// #region Local Imports
import { ToDo } from '../../types';
// #endregion Local Imports

export interface TodosState {
  todos?: ToDo[];
}

const initialState: TodosState = {
  todos: undefined,
} as const;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state: Draft<typeof initialState>, action: PayloadAction<ToDo>) => {
      if (state.todos !== undefined) {
        return { todos: [...state.todos, action.payload] };
      }

      return { todos: [action.payload] };
    },
    toggleTodo: (state: Draft<typeof initialState>, action: PayloadAction<ToDo>) => {
      if (state.todos !== undefined) {
        return {
          todos: state.todos.map((t) => {
            if (t.id !== action.payload.id) {
              return t;
            }

            return {
              ...t,
              done: !t.done,
            };
          }),
        };
      }
    },
  },
});

export const getTodosState = (state: { todos: TodosState }) => state.todos;

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
