import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { roundsAtom } from "@/src/jotai/jotai";
import styles from './ControlButtons.module.scss';
export default function ControlButtons(){
    const [rounds] = useAtom(roundsAtom);
    
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/");
    };
    return (
        <div className={styles.sideDiv}>
        <button className={styles.backToHome} onClick={handleClick}>Back To Home</button>
        <p>{rounds} rounds left</p>
      </div>
    )
}