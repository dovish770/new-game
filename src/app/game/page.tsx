'use client'
import styles from './Game.module.scss';
import Board from '@/src/components/board/Board';
import { store } from '@/src/jotai/jotai';
import { Provider } from 'jotai';
import ControlButtons from '@/src/components/controlButtons/ControlButtons';
import Timer from '@/src/components/timer/Timer';

const Game = () => {
  return (
    <div className={styles.board}>
      <Provider store={store}>
        <Board />
        <ControlButtons/>
      </Provider>
    </div>
  );
}

export default Game
