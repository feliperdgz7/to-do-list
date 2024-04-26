import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as emuns from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'Ver a aula 5',
    prioridade: emuns.Prioridade.IMPORTANTE,
    status: emuns.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta',
    descricao: 'Ir ao banco pagar conta de luz',
    prioridade: emuns.Prioridade.URGENTE,
    status: emuns.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer treino de peito',
    prioridade: emuns.Prioridade.IMPORTANTE,
    status: emuns.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
