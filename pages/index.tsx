// #region Global Imports
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
// #endregion Global Imports

// #region Local Imports
import { Button, TextInput, TodoItemList } from '../src/Components';
import {
    addTodo,
    getTodosState,
    toggleAllTodos,
    toggleSelectedFilter,
} from '../src/store/slices/todosSlice';
import { useDispatch, useSelector } from '../src/store/store';
import styles from '../styles/Home.module.css';
// #endregion Local Imports

// #region Interface Imports
import { ToDo } from '../src/types';
// #endregion Interface Imports

type InputFormProps = {
    value: string;
    setValue: (newValue: string) => void;
};

const ButtonContainer = styled.div`
    display: flex;
`;

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin: 24px 0;

    p {
        min-width: 50px;
        text-align: center;
    }
`;

function InputForm({ value, setValue }: InputFormProps): JSX.Element {
    const dispatch = useDispatch();
    const { todos, filter } = useSelector(getTodosState);

    function submitTodo(): void {
        dispatch(addTodo({ id: uuidv4(), text: value, done: false }));
        setValue('');
    }

    function onEnterPress(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            submitTodo();
        }
    }

    function applyFilter(): ToDo[] {
        switch (filter) {
            case 'all':
                if (todos) {
                    return todos;
                }
                break;
            case 'done':
                if (todos) {
                    return todos.filter((t) => t.done === true);
                }
                break;
            case 'incomplete':
                if (todos) {
                    return todos.filter((t) => t.done === false);
                }
                break;
            default:
                break;
        }

        return [];
    }

    return (
        <>
            <TodoItemList todos={applyFilter()} />
            <TextInput
                value={value}
                onChange={(v) => setValue(v)}
                placeholder="What do you need to do?"
                onKeyDown={onEnterPress}
            />
            <ButtonContainer>
                <Button
                    buttonText="Add"
                    onClick={() => submitTodo()}
                    shape="pill"
                    kind="primary"
                />
                <Button
                    buttonText="Complete All"
                    onClick={() => dispatch(toggleAllTodos())}
                    shape="pill"
                    kind="secondary"
                />
            </ButtonContainer>
        </>
    );
}

function Home(): JSX.Element {
    const [value, setValue] = useState('');

    const { filter } = useSelector(getTodosState);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Todo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Redux Todo App Example</h1>
                <FilterContainer>
                    <Button
                        buttonText="All"
                        onClick={() => dispatch(toggleSelectedFilter('all'))}
                        shape="pill"
                        kind={filter === 'all' ? 'primary' : 'secondary'}
                    />
                    <Button
                        buttonText="Done"
                        onClick={() => dispatch(toggleSelectedFilter('done'))}
                        shape="pill"
                        kind={filter === 'done' ? 'primary' : 'secondary'}
                    />
                    <Button
                        buttonText="Incomplete"
                        onClick={() =>
                            dispatch(toggleSelectedFilter('incomplete'))
                        }
                        shape="pill"
                        kind={filter === 'incomplete' ? 'primary' : 'secondary'}
                    />
                </FilterContainer>
                <InputForm value={value} setValue={setValue} />
            </main>
        </div>
    );
}

export default Home;
