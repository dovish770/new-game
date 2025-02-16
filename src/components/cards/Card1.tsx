import Shape from "@/src/models/shapeModel"
import styles from '../board/Board.module.scss'
import React from "react"

interface Card1Props{
    shuffledItems: Shape[]
    handleClick: (name:string)=> void
}

const Card1: React.FC<Card1Props> = ({shuffledItems, handleClick}) => {
    return (
        <div className={styles.boardConteiner}> 
            {shuffledItems.map((shape, idx) => (
                idx <= 6 && <img key={idx} src={shape.path} alt={shape.Sname} className={styles[shape.className]} onClick={() => handleClick(shape.Sname)} />
            ))
            }
        </div>
    )
}

export default Card1