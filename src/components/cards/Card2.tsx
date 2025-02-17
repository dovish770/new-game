import styles from '../board/Board.module.scss'
import React from "react"
import { useAtom } from "jotai"
import { commonAtom, isTrueAtom, shuffledItems2Atom } from "@/src/jotai/jotai"
import { setTwoShapesLists } from '@/src/services/shuffleService'

const Card2 = () => {
    const [CommonShape] = useAtom(commonAtom)
    const [shapesList] = useAtom(shuffledItems2Atom)
    const [, setIsTrue] = useAtom(isTrueAtom)

    const handleClick = (shapeName: string) => {
        if (shapeName === CommonShape) {
            setIsTrue(true);
            setTwoShapesLists()
        }
    }

    return (
        <div className={styles.boardConteiner}>
            {shapesList.map((shape, idx) => (
                idx <= 6 && <img key={idx} src={shape.path} alt={shape.Sname} className={styles[shape.className]} onClick={() => handleClick(shape.Sname)} />
            ))
            }
        </div>
    )
}

export default Card2