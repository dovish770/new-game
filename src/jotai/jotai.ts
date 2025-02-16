import { atom,  createStore} from 'jotai';
import {fullSahpesList, ids} from '@/src/assets/storage';

export const store = createStore();

export const fullShpesListAtom = atom(fullSahpesList);
export const idsAtom = atom(ids);
