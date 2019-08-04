<template>
    <div>
        <h2>Sobre</h2>
        <p v-if="autor">Autor: {{autor}}</p>
        <input type="text" v-model="autor">
    </div>
</template>

<script>
export default {
    name: 'SobreNós',
    data() {
        return {
            autor: ''
        }
    }
}
</script>
