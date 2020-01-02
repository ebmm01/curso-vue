<template>
    <div>
        <h2 class="font-weight-light">Contador: {{ contador }}</h2>
        <button class="btn btn-lg btn-danger" @click="decrementar">-</button>
        <button class="btn btn-lg btn-success ml-2" @click="incrementar">+</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    // computed: mapState(['contador']),
    computed: mapState('contador',{
        contador: state => state.contador
    }),
    methods: {
        decrementar() {
            this.$store.state.contador.contador--
        },
        incrementar() {
            this.$store.state.contador.contador++
        }
    }
}
</script>