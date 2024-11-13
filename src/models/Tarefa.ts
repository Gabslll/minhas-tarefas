import * as enums from '../utils/enums/Tarefa';

class Tarefa {
  titulo: string;
  proridade: enums.prioridade;
  status: enums.Status;
  decricao: string;
  id: number;

  constructor(
    titulo: string,
    prioridade: enums.prioridade,
    status: enums.Status,
    decricao: string,
    id: number
  ) {
    this.titulo = titulo;
    this.proridade = prioridade;
    this.status = status;
    this.decricao = decricao;
    this.id = id;
  }
}

export default Tarefa;
