import { store, fullShpesListAtom, idsAtom, shuffledItemsAtom, commonAtom, shuffledItems2Atom, isTrueAtom, timeAtom } from "../jotai/jotai";
import { nameNPath } from "../types/shape";
import Shape from "../models/shapeModel";
import { getRandomIndex, shuffleArray } from "../utils/helpFunctions";

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

export const setTwoShapesLists = () => {
    setTimeout(() => {
        store.set(isTrueAtom, false);
        store.set(timeAtom, Date.now());
    }, 2000);

    const firstShuffledList = getShuffledShapes();
    store.set(shuffledItemsAtom, firstShuffledList);

    const commonShape = firstShuffledList[getRandomIndex(firstShuffledList.length)].Sname;
    store.set(commonAtom, commonShape);

    const secondShuffledList = getShuffledShapes2(commonShape, firstShuffledList);
    store.set(shuffledItems2Atom, secondShuffledList ?? []);
};


export const setTwoShapesListsFirstTime = () => {
    store.set(timeAtom, Date.now());
    const firstShuffledList = getShuffledShapes();
    store.set(shuffledItemsAtom, firstShuffledList);
    
    const commonShape = firstShuffledList[getRandomIndex(firstShuffledList.length)].Sname;
    store.set(commonAtom, commonShape);

    const secondShuffledList = getShuffledShapes2(commonShape, firstShuffledList);
    store.set(shuffledItems2Atom, secondShuffledList ?? []);
};


