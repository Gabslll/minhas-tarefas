import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BotaoSalvar, MainContainer, Titulo } from '../../styles';
import { Campo } from '../../styles';
import { Form, Opcao, Opcoes } from './styles';
import * as enums from '../../utils/enums/Tarefa';
import { cadastrar } from '../../store/reducers/tarefas';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState(enums.prioridade.NORMAL);

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(cadastrar({
      titulo,
      prioridade,
      descricao,
      status: enums.Status.PENDENTE
    }));
    navigate('/');
  };

  return (
    <MainContainer>
      <Titulo>Nova Tarefa </Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={evento => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.prioridade).map(prioridade => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={evento =>
                  setPrioridade(evento.target.value as enums.prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
