// #region Global Imports
import { configureStore } from '@reduxjs/toolkit';
import {
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
} from 'react-redux';
// #endregion Global Imports

// #region Local Imports
import todosSlice from './slices/todosSlice';
// #endregion Local Imports

export const store = configureStore({
    reducer: {
        todos: todosSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
    selector: (state: RootState) => TSelected,
): TSelected => useSelectorBase<RootState, TSelected>(selector);
