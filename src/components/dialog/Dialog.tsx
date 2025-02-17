import { isTrueAtom, timeAtom } from '@/src/jotai/jotai';
import { Dialog as MUIDialog, DialogContent, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import styles from './Dialog.module.scss'
import { useEffect, useState } from 'react';

export default function Dialog() {
  const [isTrue] = useAtom(isTrueAtom);
  const [startTime] = useAtom(timeAtom);
  const [timer, setTimer] = useState<number>(0)

  useEffect(() => {
    if (isTrue){
      setTimer((Date.now() - startTime) / 1000);
    }
  }, [isTrue]);

  return (
    <MUIDialog
      open={isTrue}
      className={styles.paperRoot}
    >
      <div className={styles.dialogContent}>
        <h3 className={styles.h3}>
          nice job!
        </h3>
        <h4>
          time: {timer.toFixed(2)} seconds!
        </h4>
      </div>
    </MUIDialog>
  )
}