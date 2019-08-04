<template>
    <div>
        <label > {{ customLabel }}</label>
        <input 
            type="range"
            :value="value"
            @input="atualizar"
            v-bind="$attrs"
            :class="inputClasses">
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        value: [Number, String],
        inputClasses: [String, Object, Array]
    },
    data() {
        return {
            valorAtual: this.value || this.$attrs.min
        }
    },
    computed: {
        customLabel() {
            return `${this.label} (R$ ${this.valorAtual})`
        }
    },
    methods: {
        atualizar(event) {
            const valor = event.target.value
            this.$emit('input',valor)
            this.valorAtual = valor
        }
    }
}
</script>
