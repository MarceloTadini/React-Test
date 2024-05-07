import { useState } from "react"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio"
import styles from './Sort.module.css'

const Sort: React.FC = () => {
    const participants = useListaDeParticipantes()
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')


    const resultado = useResultadoDoSorteio()

    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (
        <section className={styles.sorteio}>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDaVez"
                    id="participanteDaVez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={e => setParticipanteDaVez(e.target.value)}
                >
                    <option value="">Selecione o seu nome</option>
                    {participants.map(participant => <option key={participant}>{participant}</option>)}
                </select>
                <p>Clique em sortear para ver quem é o seu amigo secreto!</p>
                <button className={styles.botaoSortear}>Sortear</button>
            </form>
            {amigoSecreto && <p className={styles.resultado} role="alert">{amigoSecreto}</p>}
        </section>
    )
}

export default Sort