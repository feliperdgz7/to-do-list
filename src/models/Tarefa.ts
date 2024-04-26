import * as emuns from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: emuns.Prioridade
  status: emuns.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: emuns.Prioridade,
    status: emuns.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
