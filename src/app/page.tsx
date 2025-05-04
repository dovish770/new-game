'use client'
import { Provider } from 'jotai';
import { store } from '@/src/jotai/jotai';
import HomePage from '../components/homePage/HomePage';

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
