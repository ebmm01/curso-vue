import Vue from 'vue'

export default new Vue({
    data: {
        autenticado: false,
        contatos: [
            {id: 1, nome: 'Isaac', email: 'isaac@email.com'},
            {id: 2, nome: 'IsaaAlbertc', email: 'albert@email.com'},
            {id: 3, nome: 'Stephen', email: 'Stephen@email.com'}
        ]
    },
    created() {
        this.$on('autenticar', (autenticado) => {
            this.autenticado = autenticado
        })
    },
    methods: {
        buscarContato(id) {
            return Object.assign({}, this.contatos.find(contato => contato.id === id))
        },
        editarContato(contato) {
            const indice = this.contatos.findIndex(contato => contato.id === contato.id)
            this.contatos.splice(indice, 1, contato)
        }
    }
})