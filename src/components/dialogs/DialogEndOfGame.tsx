'use client'
import { Dialog as MUIDialog } from '@mui/material';
import styles from './Dialog.module.scss'
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { amountOfCorrectAtom, amountOfRoundsAtom, endGameFlagAtom, roundsAtom } from '@/src/jotai/jotai';
import { useAtom } from 'jotai';

export default function DialogEndOfGame() {
  const [isGamesEnded] = useAtom(endGameFlagAtom)
  const [amountOfCorrect] = useAtom(amountOfCorrectAtom)
  const [amountOfRounds] = useAtom(amountOfRoundsAtom)

  const router = useRouter();

  useEffect(() => {
    if (isGamesEnded) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [isGamesEnded]);

  return (
    <MUIDialog
      open={isGamesEnded}
      className={styles.paperRoot}
    >
      <div className={styles.dialogContent}>
        <h3 className={styles.h3}>Game Over!</h3>
        <div className={styles.resultsDiv}>
          <h5 className={styles.h5}>You have found the correct shape</h5>
          <h3 className={styles.h3}>{amountOfCorrect} out of {amountOfRounds}</h3>
          <h5 className={styles.h5}>rounds</h5>
        </div>
      </div>
    </MUIDialog>
  )
}