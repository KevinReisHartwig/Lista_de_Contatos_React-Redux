import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListarContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarOBuscar />
    <ListarContatos />
    <BotaoAdicionar />
  </>
)

export default Home
