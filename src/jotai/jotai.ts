import { atom,  createStore} from 'jotai';
import {fullSahpesList, ids} from '@/src/assets/storage';
import Shape from '../models/shapeModel';

export const store = createStore();

export const fullShpesListAtom = atom(fullSahpesList);
export const idsAtom = atom(ids);

export const isTrueAtom = atom<boolean>(false)
export const commonAtom = atom<string>('')

export const shuffledItemsAtom = atom<Shape[]>([])
export const shuffledItems2Atom = atom<Shape[]>([])

export const timeAtom = atom<number>(0)
