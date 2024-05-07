import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe('Comportamento do Formulário', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })

    test('adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Clara'
            }
        })
        //clicar no botão de submeter
        fireEvent.click(botao)

        //garantir que o inpput esteja com o foco ativo
        expect(input).toHaveFocus()

        //garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    })

    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Ana Clara'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Ana Clara'
            }
        })
        fireEvent.click(botao)

        const menssagemDeErro = screen.getByRole('alert')

        expect(menssagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    test('a menssagem de erro deve sumir após o timer', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Ana Clara'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Ana Clara'
            }
        })
        fireEvent.click(botao)

        let menssagemDeErro = screen.queryByRole('alert')
        expect(menssagemDeErro).toBeInTheDocument()

        //esperar N segundos
        act(() => {
            jest.runAllTimers()
        });

        menssagemDeErro = screen.queryByRole('alert')
        expect(menssagemDeErro).toBeNull()
    })
})

