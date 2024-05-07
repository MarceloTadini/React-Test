import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import List from "."
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"

jest.mock('../../state/hooks/useListaDeParticipantes', () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot><List/></RecoilRoot>)

        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0)
    })
})

describe('Lista preenchida de participantes', () => {
    const participants = ['Ana', 'Clara']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participants)
    })
    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot><List/></RecoilRoot>)

        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(participants.length)
    })
})