import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Pagar conta',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Ir ao banco pagar conta de luz',
      2
    ),
    new Tarefa(
      'Ir para academia',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Fazer treino de peito',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
