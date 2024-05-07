import React from "react"

import style from './styles.module.css'

const Card: React.FC = ({ children }) => {
    return (
        <div className={style.card}>
            {children}
        </div>
    )
}

export default Card