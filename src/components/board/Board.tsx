'use client'
import React, { useEffect, useState } from 'react';
import styles from './Board.module.scss';
import Shape from '@/src/models/shapeModel';
import { getShuffledShapes, getShuffledShapes2, getRandomIndex } from '@/src/services/shuffleService';
import Card1 from '../cards/Card1';
import Card2 from '../cards/Card2';

interface BoardProps {
    setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
}
const Board: React.FC<BoardProps> = ({ setIsTrue }) => {
    const [shuffledItems, setShuffledItems] = useState<Shape[]>([]);
    const [shuffledItems2, setShuffledItems2] = useState<Shape[]>([]);
    const [commonShape, setCommonShape] = useState<string>()

    useEffect(() => {
        const shuffled = getShuffledShapes();
        setShuffledItems(shuffled);
        const randomIdx = getRandomIndex(shuffled.length);
        const commonShape = shuffled[randomIdx].Sname
        setCommonShape(commonShape)
        setShuffledItems2(getShuffledShapes2(commonShape, shuffled) || []);
    }, []);

    const handleClick = (shapeName: string) => {
        if (shapeName === commonShape) {
            setIsTrue(true)            
        }
    }
    
    return (
        <>
            <Card1 shuffledItems={shuffledItems} handleClick={handleClick} />
            <Card2 shuffledItems={shuffledItems2} handleClick={handleClick} />
        </>
    );
};

export default Board