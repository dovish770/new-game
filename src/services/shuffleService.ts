import { store, fullShpesListAtom, idsAtom } from "../jotai/jotai";
import { nameNPath } from "../types/shape";
import Shape from "../models/shapeModel";

export const getShuffledShapes = (): Shape[] => {
    const shapes: nameNPath[] = shuffleArray(store.get(fullShpesListAtom))
    const shuffleClassNames: string[] = shuffleArray(store.get(idsAtom))
    return shapes.slice(0, 7).map((shape, idx) => ({
        Sname: shape.sname,
        path: shape.path,
        className: shuffleClassNames[idx]
    }));
};

export const getShuffledShapes2 = (shape: string, shapes1: Shape[]): Shape[] | null => {
    const fullShapes: nameNPath[] = store.get(fullShpesListAtom)
    const shapes2 = fullShapes.filter(s => !shapes1.some(s1 => s1.Sname === s.sname));
    const shuffledShapes2 = shuffleArray(shapes2).slice(0, 6); 

    const commonShape: nameNPath | undefined = fullShapes.find(s => s.sname === shape);
    if (!commonShape) return null;
    
    const shuffledShapes2WithCommon = [...shuffledShapes2, commonShape];

    const finalShuffled = shuffleArray(shuffledShapes2WithCommon);

    const shuffleClassNames: string[] = shuffleArray(store.get(idsAtom));

    return finalShuffled.map((shape, idx) => ({
        Sname: shape.sname,
        path: shape.path,
        className: shuffleClassNames[idx]
    }));
};


const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[random]] = [newArray[random], newArray[i]];
    }
    return newArray;
}

export const getRandomIndex = (maxNum: number): number => {    
    return Math.floor(Math.random() * maxNum);
}


