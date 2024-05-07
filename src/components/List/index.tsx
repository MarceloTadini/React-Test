import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"

const List: React.FC = () => {
    const participants: string[] = useListaDeParticipantes()
    return(
        <ul>
            {participants.map(participant => <li key={participant}>{participant}</li>)}
        </ul>
    )
}

export default List