import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: originalNome,
  numero: originalNumero,
  email: originalEmail,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState(0)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (originalNome.length > 0) {
      setNome(originalNome)
    }

    if (originalNumero > 0) {
      setNumero(originalNumero)
    }

    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalNome, originalNumero, originalEmail])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(originalNome)
    setNumero(originalNumero)
    setEmail(originalEmail)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {originalNome}
      </S.Titulo>
      <S.Input
        type="text"
        value={nome}
        onChange={(evento: ChangeEvent<HTMLInputElement>) =>
          setNome(evento.target.value)
        }
        disabled={!estaEditando}
      />
      <S.Input
        type="number"
        value={numero}
        onChange={(evento: ChangeEvent<HTMLInputElement>) =>
          setNumero(parseInt(evento.target.value))
        }
        disabled={!estaEditando}
      />
      <S.Input
        type="email"
        value={email}
        onChange={(evento: ChangeEvent<HTMLInputElement>) =>
          setEmail(evento.target.value)
        }
        disabled={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numero,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
