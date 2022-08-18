// #region Global Imports
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
// #endregion Global Imports

// #region Local Imports
import { ToDo } from '../../types';
// #endregion Local Imports

export interface TodosState {
    todos?: ToDo[];
    filter: 'all' | 'done' | 'incomplete';
}

const initialState: TodosState = {
    todos: undefined,
    filter: 'all',
} as const;

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (
            state: Draft<typeof initialState>,
            action: PayloadAction<ToDo>,
        ) => {
            if (state.todos !== undefined) {
                if (action.payload.text !== '') {
                    return {
                        ...state,
                        todos: [...state.todos, action.payload],
                    };
                }
                return;
            }

            return { ...state, todos: [action.payload] };
        },
        toggleTodo: (
            state: Draft<typeof initialState>,
            action: PayloadAction<ToDo>,
        ) => {
            if (state.todos !== undefined) {
                return {
                    ...state,
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
        toggleAllTodos: (state: Draft<typeof initialState>) => {
            if (state.todos !== undefined) {
                return {
                    ...state,
                    todos: state.todos.map((t) => {
                        return {
                            ...t,
                            done: true,
                        };
                    }),
                };
            }
        },
        toggleSelectedFilter: (
            state: Draft<typeof initialState>,
            action: PayloadAction<'all' | 'done' | 'incomplete'>,
        ) => {
            return {
                ...state,
                filter: action.payload,
            };
        },
    },
});

export const getTodosState = (state: { todos: TodosState }) => state.todos;

export const { addTodo, toggleAllTodos, toggleSelectedFilter, toggleTodo } =
    todosSlice.actions;

export default todosSlice.reducer;
