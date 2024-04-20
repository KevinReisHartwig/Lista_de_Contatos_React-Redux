import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigare = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState(0)
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero,
        email
      })
    )
    navigare('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={numero === 0 ? '' : numero}
          onChange={({ target }) => setNumero(parseInt(target.value))}
          type="number"
          placeholder="Número de telefone"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="Email"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
