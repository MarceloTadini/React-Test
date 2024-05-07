import { realizarSorteio } from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participants = ['Ana', 'Clara', 'Marcelo', 'Gabriel', 'Felipe']

        const sorteio = realizarSorteio(participants)
        participants.forEach(participant => {
            const amigoSecreto = sorteio.get(participant)
            expect(amigoSecreto).not.toEqual(participant)
        });
    })


})