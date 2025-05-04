import { useEffect } from 'react';
import styles from './Timer.module.scss';
import { useAtom } from 'jotai';
import { isTrueAtom, roundsAtom } from '@/src/jotai/jotai';


export default function Timer() {
    const [rounds] = useAtom(roundsAtom);
    const [isTrue] = useAtom(isTrueAtom);

    useEffect(() => {
    }, [rounds]);

    return (
        !isTrue && (
            <div className={styles.timerDiv}>
                <div className={styles.line}>
                    <div className={styles.innerLine}></div>
                </div>
                <img src="timer.png" alt="" />
            </div>
        )
    );
}
