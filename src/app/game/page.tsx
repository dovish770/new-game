'use client'
import styles from './Game.module.scss';
import Board from '@/src/components/board/Board';
import { roundsAtom, store } from '@/src/jotai/jotai';
import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { Provider } from 'jotai';

const Game = () => {
  const [rounds, setRounds] = useAtom(roundsAtom);
  
  const router = useRouter();
  
    const handleClick = () => {
      setRounds(1);
      router.push("/"); 
    };

  return (
    <div className={styles.board}>
      <Provider store={store}>
        <Board />
      </Provider>

      <div className={styles.sideDiv}>
        <button className={styles.backToHome} onClick={handleClick}>Back To Home</button>
        <p>{rounds} rounds left</p>
      </div>
    </div>
  );
}

export default Game
