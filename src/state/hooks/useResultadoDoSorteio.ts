import { useRecoilValue } from "recoil"
import { Result } from "../atom"

export const useResultadoDoSorteio = () => {
    return useRecoilValue(Result)
}