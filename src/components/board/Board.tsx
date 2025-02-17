'use client';
import { useEffect } from 'react';
import Card1 from '../cards/Card1';
import Card2 from '../cards/Card2';
import { setTwoShapesListsFirstTime } from '@/src/services/shuffleService';
import Dialog from '../dialog/Dialog';

const Board = () => {
    useEffect(() => {
        setTwoShapesListsFirstTime();
    }, []);

    return (
        <>
            <Dialog />
            <Card1 />
            <Card2 />
        </>
    );
};

export default Board;

