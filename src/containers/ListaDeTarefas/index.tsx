import { useSelector } from 'react-redux';

import Tarefa from '../../components/Tarefa';
import { Container } from './style';
import { RootReducer } from '../../store';

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state);
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map(t => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.decricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.proridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListaDeTarefas;
