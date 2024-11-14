import * as enums from '../utils/enums/Tarefa';

class Tarefa {
  titulo: string;
  prioridade: enums.prioridade;
  status: enums.Status;
  descricao: string;
  id: number;

  constructor(
    titulo: string,
    prioridade: enums.prioridade,
    status: enums.Status,
    decricao: string,
    id: number
  ) {
    this.titulo = titulo;
    this.prioridade = prioridade;
    this.status = status;
    this.descricao = decricao;
    this.id = id;
  }
}

export default Tarefa;
