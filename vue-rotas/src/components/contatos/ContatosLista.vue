<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaIten
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>

        <p v-else>Nenhum contato cadastrado</p>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
import ContatosListaIten from './ContatosListaIten'

export default {
    components: {
       ContatosListaIten 
    },
    data() {
        return {
            contatos: [
                {id: 1, nome: 'Isaac', email: 'isaac@email.com'},
                {id: 2, nome: 'IsaaAlbertc', email: 'albert@email.com'},
                {id: 3, nome: 'Stephen', email: 'Stephen@email.com'}
            ]
        }
    },
    methods: {
        voltar(event) {
            //this.$router.push('/')
            this.$router.back()
        }
    }
}
</script>