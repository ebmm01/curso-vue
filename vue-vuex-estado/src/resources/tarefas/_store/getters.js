export default {
    tarefasConcluidas: state => state.tarefas.filter(t => t.concluido),
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefaPorId: state => {
        return id  => {
            return state.tarefas.find(t => t.id === id)
        }
    },
    boasVindas:(state, getters, rootState, rootGetters) => rootGetters.mensagemBoasVindas
}