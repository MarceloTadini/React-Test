import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import styles from './styles.module.css'
import { useSorteador } from "../../state/hooks/useSorteador"

const Footer: React.FC = () => {
    const participants = useListaDeParticipantes()
    const navTo = useNavigate()

    const sortear = useSorteador()

    const begin = () => {
        sortear()
        navTo('/sort')
    }

    return(
        <footer className={styles.rodapeConfiguracoes}>
            <button className={styles.botao} disabled={participants.length < 3} onClick={begin}> Iniciar brincadeira</button>
            <img src="/images/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}

export default Footer