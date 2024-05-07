// src/componentes/Cabecalho/index.tsx
import style from './styles.module.css'

const Header = () => {
    return (
        <header className={style.cabecalho}>
            <div className={style.imagemLogo} role="img" aria-label='Logo do Sorteador'></div>
            <img className={style.participante} src="/images/participante.png" alt="Participante com um presente na mão" />
        </header>
    )
}

export default Header
