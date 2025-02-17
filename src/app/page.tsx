'use client'
import styles from '../components/board/Board.module.scss';
import Board from '../components/board/Board';
import { Provider } from 'jotai';
import { store } from '../jotai/jotai';

export default function Home() {
  return (
    <div className={styles.board}>
      <Provider store={store}>
        <Board />
      </Provider>
    </div>
  );
}
