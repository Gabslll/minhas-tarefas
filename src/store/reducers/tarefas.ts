import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa';

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.prioridade.URGENTE,
      enums.Status.CONLUIDA,
      'Rever aula 2 do módulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect',
      3
    ),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter(tarefa => tarefa.id !== action.payload);
    },
  },
});

export const { remover } = tarefasSlice.actions;

export default tarefasSlice.reducer;
