import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'

import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { atualizarInput } from '../../store/reducers/filtro'

type Props = {
  mostrarOBuscar: boolean
}

const BarraLateral = ({ mostrarOBuscar }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { input } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostrarOBuscar ? (
        <Campo
          type="text"
          placeholder="Buscar o nome do contato"
          value={input}
          onChange={(evento) => dispatch(atualizarInput(evento.target.value))}
        />
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
