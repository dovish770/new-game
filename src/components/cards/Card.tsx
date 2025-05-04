'use client'
import styles from '../board/Board.module.scss'
import { useAtom } from "jotai"
import { commonAtom, isTrueAtom, amountOfCorrectAtom } from "@/src/jotai/jotai"
import Shape from '@/src/models/shapeModel'
import { setTwoShapesLists } from '@/src/services/shuffleService'

interface CardProps{
    shapesList: Shape[]
}

const Card: React.FC<CardProps> = ({shapesList}) => {
    const [commonShape] = useAtom(commonAtom)
    const [, setIsTrue] = useAtom(isTrueAtom)
    const [amountOfCorrect, setAmountOfCorrect] = useAtom(amountOfCorrectAtom)

    const handleClick = (shapeName: string) => {
        if (shapeName === commonShape) {
            setIsTrue(true)
            setAmountOfCorrect(amountOfCorrect+1)
            setTwoShapesLists()
        }
    }
    
    return (
        <div className={styles.CardContainer}>
            {shapesList.map((shape, idx) => (
                idx <= 6 && <img key={idx} src={shape.path} alt={shape.Sname} className={styles[shape.className]} onClick={() => handleClick(shape.Sname)} />
            ))}
        </div>
    )
}

export default Card