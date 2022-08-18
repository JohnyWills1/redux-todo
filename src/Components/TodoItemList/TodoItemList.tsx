import React from 'react';
import { ToDo } from '../../types';
import TodoItem from '../TodoItem/TodoItem';

type Props = {
    todos?: ToDo[];
};

function TodoItemList({ todos }: Props): JSX.Element {
    return (
        <div>
            {todos && todos.length > 0 ? (
                todos.map((t) => <TodoItem key={t.id} todo={t} />)
            ) : (
                <p>Empty!</p>
            )}
        </div>
    );
}

export default TodoItemList;
