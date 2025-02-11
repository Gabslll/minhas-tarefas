import BotaoAdicionar from '../../components/BotaoAdicional';
import BarraLateral from '../../containers/BarraLateral';
import ListaDeTarefas from '../../containers/ListaDeTarefas';

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
);

export default Home;
