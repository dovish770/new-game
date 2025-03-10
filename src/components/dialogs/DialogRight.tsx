import { isTrueAtom, timeAtom } from '@/src/jotai/jotai';
import { Dialog as MUIDialog, DialogContent, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import styles from './Dialog.module.scss'
import { useEffect, useState } from 'react';
import { getTimer } from '@/src/services/timerService';

export default function Dialog() {
  const [isTrue] = useAtom(isTrueAtom);
  const [startTime] = useAtom(timeAtom);
  const [timer, setTimer] = useState<string>('')

  useEffect(() => {
    if (isTrue){
      let time = (Date.now() - startTime) / 1000;
      setTimer(getTimer(time));
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
          it took you {timer}
        </h4>
      </div>
    </MUIDialog>
  )
}