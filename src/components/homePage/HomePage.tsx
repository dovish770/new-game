'use client'
import styles from './homePage.module.scss';
import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { amountOfCorrectAtom, amountOfRoundsAtom, endGameFlagAtom, roundsAtom, store } from '@/src/jotai/jotai';
import { useEffect } from 'react';
import Timer from '../timer/Timer';

export default function HomePage() {
  const router = useRouter();
  const [rounds, setRounds] = useAtom(roundsAtom);
  const [, setEndOfGameFlag] = useAtom(endGameFlagAtom)
  const [, setAmountOfCorrect] = useAtom(amountOfCorrectAtom)
  const [, setAmountRounds] = useAtom(amountOfRoundsAtom)

  useEffect(()=>{
    setRounds(1);
  }, [])

  const handleStartGame = () => {
    setEndOfGameFlag(false);
    setAmountOfCorrect(0);
    setAmountRounds(rounds);
    router.push("/game");
  };

  const handleClickRounds = (isPlus: boolean) => {
    if (!isPlus) {
      if (rounds>1) {
        setRounds(rounds-1);
      }
    }else{
      if (rounds < 9)
      setRounds(rounds+1);
    }
  }

  return (
    <div className={styles.homePage}>
        <div>
          <button className={styles.startButton} onClick={handleStartGame}>start game</button>
        </div>
        <div className={styles.roundsDiv}>
          <button  onClick={() => handleClickRounds(false)}><img src="minus.png" /></button>
          <p>{rounds} Rounds</p>
          <button onClick={() => handleClickRounds(true)}><img src="add.png" /></button>
        </div>
    </div>
  );
}
