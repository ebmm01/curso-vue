<template>
    <div v-if="contato">
    <h3 class="font-weight-light">Nome: {{contato.nome}}</h3>
    <p>Email: {{contato.email}}</p>
    <button 
        class="btn btn-secondary mr-2" 
        @click="$router.back()">
        Voltar
    </button>
    <router-link 
        :to="`/contatos/${id}/editar`"
        class="btn btn-primary">
        Editar
    </router-link>
    </div>
</template>

<script>
import EventBus from "@/event-bus.js"
export default {
    props: {
        id: {
            type: [Number, String]
        }
    },
    // created() {
    //     this.contato = EventBus.buscarContato(this.id)
    // },
    data() {
        return {
            contato: undefined
        }
    },
    /*watch: {
        '$route'(to,from) {
            this.id = to.params.id
        }
    },*/
    beforeRouteEnter(to,from,next) {
        next(vm => {
            vm.contato = EventBus.buscarContato(vm.id)
        })
    },
    beforeRouteUpdate(to,from, next) {
        next()
    },
}
</script>