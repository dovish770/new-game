'use client'
import styles from '../board/Board.module.scss'
import { useAtom } from "jotai"
import { commonAtom, isTrueAtom, shuffledItemsAtom } from "@/src/jotai/jotai"
import { setTwoShapesLists } from '@/src/services/shuffleService'

const Card1 = () => {
    const [CommonShape] = useAtom(commonAtom)
    const [shapesList] = useAtom(shuffledItemsAtom)
    const [, setIsTrue] = useAtom(isTrueAtom)

    const handleClick = (shapeName: string) => {
        if (shapeName === CommonShape) {
            setIsTrue(true)
            setTwoShapesLists()
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

export default Card1