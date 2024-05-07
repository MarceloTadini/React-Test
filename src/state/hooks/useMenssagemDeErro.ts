import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMenssagemDeErro = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem
}