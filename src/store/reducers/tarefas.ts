import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa';
import { Titulo } from '../../components/Tarefa/style';

type TArefasState = {
  itens: Tarefa[];
};

const initialState: TArefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript revendo o exercício do módulo 7',
      prioridade: enums.prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar JavaScript',
    },
    {
      id: 2,
      descricao: 'Estudar material de apoio',
      prioridade: enums.prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar TypeScript',
    },
    {
      id: 3,
      descricao: 'Praticar a construção de uma landing page',
      prioridade: enums.prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Bootstrap',
    },
  ],
};

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload);
    },
  },
});

export const { remover } = tarefasSlice.actions;

export default tarefasSlice.reducer;
