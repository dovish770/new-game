'use client'
import styles from '../board/Board.module.scss'
import { useAtom } from "jotai"
import { commonAtom, isTrueAtom, shuffledItemsAtom, roundsAtom } from "@/src/jotai/jotai"
import { setTwoShapesLists } from '@/src/services/shuffleService'
import Shape from '@/src/models/shapeModel'
import DialogEndOfGame from '../dialogs/DialogEndOfGame'

interface CardProps{
    shapesList: Shape[]
}
const Card: React.FC<CardProps> = ({shapesList}) => {
    const [commonShape] = useAtom(commonAtom)
    const [, setIsTrue] = useAtom(isTrueAtom)
    const [rounds, setRounds] = useAtom(roundsAtom);

    const handleClick = (shapeName: string) => {
        if (shapeName === commonShape) {
            setIsTrue(true)
            setRounds(rounds-1)
            if (rounds>0){
                setTwoShapesLists()
            } else {
                return <DialogEndOfGame/>
            }
        }
    }

    return (
        <div className={styles.boardConteiner}>
            {shapesList.map((shape, idx) => (
                idx <= 6 && <img key={idx} src={shape.path} alt={shape.Sname} className={styles[shape.className]} onClick={() => handleClick(shape.Sname)} />
            ))}
        </div>
    )
}

export default Card