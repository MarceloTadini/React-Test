import shuffle from "just-shuffle"

export const realizarSorteio = (participants: string[]) => {
    const totalParticipants = participants.length
    const sortedParticipants = shuffle(participants)
    const resultado = new Map<string, string>()

    for (let index = 0; index < totalParticipants; index++) {
        const friendIndex = index === (totalParticipants - 1) ? 0 : index + 1
        resultado.set(sortedParticipants[index], sortedParticipants[friendIndex])
    }
    return resultado
}