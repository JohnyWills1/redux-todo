// #region Global Imports
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
// #endregion Global Imports

// #region Local Imports
import { Button, TextInput, TodoItemList } from '../src/Components';
import { addTodo, getTodosState } from '../src/store/slices/todosSlice';
import { useDispatch, useSelector } from '../src/store/store';
import styles from '../styles/Home.module.css';
// #endregion Local Imports

// #region Interface Imports

// #endregion Interface Imports

const ButtonContainer = styled.div`
  display: flex;
`;

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const { todos } = useSelector(getTodosState);

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Todo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Redux Todo App Example</h1>
        <TodoItemList todos={todos} />
        <TextInput value='' />
        <ButtonContainer>
          <Button
            buttonText='Add'
            onClick={() => dispatch(addTodo({ id: 1, text: 'test todo', done: false }))}
            shape='pill'
            type='primary'
          />
          <Button buttonText='Complete All' onClick={() => alert('complete all button clicked')} shape='pill' type='secondary' />
        </ButtonContainer>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
