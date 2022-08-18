// #region Global Imports
import React from 'react';
import styled from 'styled-components';
// #endregion Global Imports

// #region Local Imports
import Button from '../Button';
import { toggleTodo } from '../../store/slices/todosSlice';
import { useDispatch } from '../../store/store';
// #endregion Local Imports

// #region Interface Imports
import { ToDo } from '../../types';
// #endregion Interface Imports

type Props = {
    todo: ToDo;
};

type TextProps = {
    done: boolean;
};

const TodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    width: 100%;
`;

const TodoText = styled.p<TextProps>`
    text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
    color: ${(props) => (props.done ? '#939393' : 'white')};
`;

function TodoItem({ todo }: Props) {
    const dispatch = useDispatch();

    function toggleTodoItem(): void {
        dispatch(toggleTodo(todo));
    }

    return (
        <TodoContainer>
            <TodoText done={todo.done}>
                {todo.done ? '🟢' : '🔴'} ・ {todo.text}
            </TodoText>
            <Button
                buttonText={todo.done ? '❌' : '✅'}
                onClick={() => toggleTodoItem()}
                shape="square"
                kind="secondary"
            />
        </TodoContainer>
    );
}

export default TodoItem;
