<template>
    <li>
        <span>{{contato.nome}}</span>
        <router-link 
            :to="{path: `/contatos/${contato.id}`}"
            class="btn btn-info btn-small float-right">
            Detalhes
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    }
}
</script>