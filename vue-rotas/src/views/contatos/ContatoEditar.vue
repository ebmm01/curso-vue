<template>
    <div>
        <h3 class="font-weight-light">Editar contato com o id {{$route.params.id}}</h3>
        <button 
            @click="$router.back()"
            class="btn btn-secondary mt-4 mb-4">
            Voltar
        </button>
    </div>
</template>