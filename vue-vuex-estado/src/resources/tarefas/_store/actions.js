import TarefasServices from './../_services/TarefasService'

import * as types from './mutation-types'

export default {
    concluirTarefa: async ({ dispatch }, payload) => {
        const tarefa = Object.assign({}, payload.tarefa)
        tarefa.concluido = !tarefa.concluido
        dispatch('editarTarefa', { tarefa })
    },
    criarTarefa: ({ commit }, { tarefa }) => {
        return TarefasServices.postTarefa(tarefa)
            .then(response => {
                commit(types.CRIAR_TAREFA, { tarefa: response.data })
            })
            .catch(erro => commit(types.SETAR_ERRO, { erro }))
    },
    editarTarefa: async ({ commit }, { tarefa }) => {
        const response = await TarefasServices.putTarefa(tarefa)
        commit(types.EDITAR_TAREFA, { tarefa:response.data })
    },
    deletarTarefa: async ({ commit }, { tarefa }) => {
        const response = await TarefasServices.deleteTarefa(tarefa.id)
        commit(types.DELETAR_TAREFA, { tarefa })
    },
     listarTarefas: async ({ commit }, payload) => {
        try {
            const response = await TarefasServices.getTarefas();
            commit(types.LISTAR_TAREFAS, { tarefas: response.data })
        } catch(erro) {
            commit(types.SETAR_ERRO, { erro })
        }
        
    },
    selecionarTarefa: ({ commit }, payload) => {
        commit(types.SELECIONAR_TAREFA, payload)
    },
    resetarTarefaSelecionada: ({ commit }) => {
        commit(types.SELECIONAR_TAREFA, { tarefa: undefined })
    }
}