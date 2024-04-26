import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      descricao: 'Estudar modulo 8'
    },
    {
      id: 2,
      titulo: 'Ler sobre TypeScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Ler modulo 20'
    },
    {
      id: 3,
      titulo: 'Revisar Python',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Revisar a materia de Python'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
