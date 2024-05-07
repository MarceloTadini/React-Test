import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const Result = atom <Map<string, string>>({
    key: 'Result',
    default: new Map
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})
