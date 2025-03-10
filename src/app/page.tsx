'use client'
import { Provider } from 'jotai';
import styles from './home.module.scss';
import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { roundsAtom, store } from '@/src/jotai/jotai';

export default function Home() {
  const router = useRouter();
  const [rounds, setRounds] = useAtom(roundsAtom);

  const handleStartGame = () => {
    router.push("/game");
  };

  const handleClickRounds = (isPlus: boolean) => {
    if (!isPlus) {
      if (rounds>1) {
        setRounds(rounds-1)
      }
    }else{
      if (rounds < 9)
      setRounds(rounds+1)
    }
  }

  return (
    <div className={styles.homePage}>
      <Provider store={store}>
        <div>
          <button className={styles.startButton} onClick={handleStartGame}>start game</button>
        </div>
        <div className={styles.roundsDiv}>
          <button  onClick={() => handleClickRounds(false)}><img src="minus.png" /></button>
          <p>{rounds} Rounds</p>
          <button onClick={() => handleClickRounds(true)}><img src="/add.png" /></button>
        </div>
      </Provider>
    </div>
  );
}
