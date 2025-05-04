'use client';
import { useEffect } from 'react';
import Card from '../cards/Card';
import { useAtom } from "jotai"
import { setTwoShapesListsFirstTime } from '@/src/services/shuffleService';
import DialogTrue from '../dialogs/DialogTrue';
import { shuffledItemsAtom,shuffledItems2Atom } from '@/src/jotai/jotai';
import DialogEndOfGame from '../dialogs/DialogEndOfGame';
import Timer from '../timer/Timer';
import styles from './Board.module.scss'
const Board = () => {
    const [shapesList1] = useAtom(shuffledItems2Atom)
    const [shapesList2] = useAtom(shuffledItemsAtom)
    
    useEffect(() => {
        setTwoShapesListsFirstTime();
    }, []);

    return (
        <div className={styles.boardContainer}>
            <Timer/>
            <DialogTrue />
            <DialogEndOfGame />
            <Card shapesList={shapesList1}/>
            <Card shapesList={shapesList2}/>
        </div>
    );
};

export default Board;

