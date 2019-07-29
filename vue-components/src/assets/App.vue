<template>
    <div>
        <app-header></app-header>
        <app-contador></app-contador>
    </div>
</template>

<script>

import AppContador from './AppContador.vue'
import AppHeader from './AppHeader.vue'

export default {
    components: {
        'app-contador': AppContador,
        AppHeader: AppHeader
    }
}
</script>
