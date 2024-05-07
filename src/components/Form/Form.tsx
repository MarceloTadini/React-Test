import { useRef, useState } from "react"
import { useAdicionarPaticipante } from "../../state/hooks/useAdicionarParticipante"
import { useMenssagemDeErro } from "../../state/hooks/useMenssagemDeErro"

import styles from './styles.module.css'

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarPaticipante()

    const mensagemDeErro = useMenssagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={adicionarParticipante}>
        <div className={styles.grupoInputBtn}>
            <input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <button disabled={!nome}>Adicionar</button>
        </div>
        {mensagemDeErro && <p className={styles.alerta && styles.erro} role="alert">{mensagemDeErro}</p>}
    </form>)
}

export default Formulario