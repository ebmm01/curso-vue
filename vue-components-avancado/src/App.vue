<template>
  <div id="app">
    <h1>Components Dinâmicos</h1>
    <button @click="ComponentSelecionado ='Home'" >Home</button>
    <button @click="ComponentSelecionado ='PostsLista'" >Posts</button>
    <button @click="ComponentSelecionado ='Sobre'" >Sobre</button>
    <button @click="ComponentSelecionado ='Assincrono'" >Assincrono</button>

    <keep-alive>
      <component 
        :is="ComponentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive>
    
  </div>
</template>

<script>

import Home from './components/Home.vue'
import Sobre from './components/Sobre.vue'
import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    Assincrono: () => ({
      component: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(import('./components/Assincrono.vue'))
        }, 2000)
      }),
      loading: {template: '<p>Carregando...</p>'},
      error: {template: '<p>Erro ao carregar component! </p>'},
      delay: 200,
      timeout: 3000  
    }),
    Home,
    PostsLista,
    Sobre
  },
  data() {
    return {
      ComponentSelecionado: 'Home',
      posts: [
        { id:1, titulo:"Components", conteudo:"Esse é um teste sobre components", autor: 'Elias Bernardo'},
        { id:2,titulo:"Components 2", conteudo:"Esse é um teste sobre components 2", autor: 'Elias Bernardo'}
      ]
    }
  },
  computed: {
    propsAtuais() {
      return this.ComponentSelecionado === 'PostsLista' 
        ? {posts: this.posts}
        : {}
    }
  }
}
</script>
