import React from 'react';
import { ToDo } from '../../types';

type Props = {
  todos?: ToDo[];
};

function TodoItemList({ todos }: Props): JSX.Element {
  return <div>{todos ? todos.map((t) => <p key={t.id}>{t.text}</p>) : <p>No Todo&apos;s set</p>}</div>;
}

export default TodoItemList;
