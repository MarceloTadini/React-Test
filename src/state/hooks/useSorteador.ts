import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { Result } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"

export const useSorteador = () => {
    const participants = useListaDeParticipantes()
    const setResult = useSetRecoilState(Result)

    return () => {
        const resultado = realizarSorteio(participants)
        setResult(resultado)
    }
}