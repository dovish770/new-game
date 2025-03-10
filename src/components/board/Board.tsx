'use client';
import { useEffect } from 'react';
import Card from '../cards/Card';
import { useAtom } from "jotai"
import { setTwoShapesListsFirstTime } from '@/src/services/shuffleService';
import Dialog from '../dialogs/DialogRight';
import { shuffledItemsAtom,shuffledItems2Atom } from '@/src/jotai/jotai';

const Board = () => {
    const [shapesList1] = useAtom(shuffledItems2Atom)
    const [shapesList2] = useAtom(shuffledItemsAtom)
    
    useEffect(() => {
        setTwoShapesListsFirstTime();
    }, []);

    return (
        <>
            <Dialog />
            <Card shapesList={shapesList1}/>
            <Card shapesList={shapesList2}/>
        </>
    );
};

export default Board;

