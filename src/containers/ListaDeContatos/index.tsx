import { useSelector } from 'react-redux'
import { MainContainer, Titulo } from '../../styles'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const ListarContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { input } = useSelector((state: RootReducer) => state.filtro)

  const filtrarContatos = () => {
    return itens.filter(
      (i) => i.nome.toLowerCase().search(input.toLowerCase()) >= 0
    )
  }

  return (
    <MainContainer>
      <Titulo>Lista de contatos</Titulo>
      <ul>
        {filtrarContatos().map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              nome={t.nome}
              numero={t.numero}
              email={t.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListarContatos
