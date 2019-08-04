<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      <h3 class="font-weight-light">Tecnologias</h3>

      <div class="form-group">
        <input 
          type="text" 
          class="form-control"
          placeholder="Insira um novo item e aperte Enter"
          @keyup.enter="adicionar"
          ref="input">
      </div>

      <transition-group tag="ul" class="list-group" name="list"> 
        <li 
          class="list-group-item"
          v-for="(tecnologia,indice) in tecnologias"
          :key="tecnologia">
          <span>{{tecnologia}}</span>
          <button 
            class="btn btn-danger btn-sm float-right"
            @click="remover(indice)">
            x
          </button>
        </li>
      </transition-group>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tecnologias: [
        'Javascript',
        'VueJS',
        'Vuex',
        'Vue router'
      ]
    }
  },
  methods: {
    adicionar(event) {
      const novoIten = event.target.value
      if(novoIten) {
        const indice = Math.floor(Math.random() * this.tecnologias.item)
        this.tecnologias.splice(indice,0, novoIten)
        this.$refs.input.value = ""
      }
    },
    remover(indice) {
      this.tecnologias.splice(indice,1)
    }
  }
}
</script>

style <style scoped>
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(-70px);
  }
  .list-enter-active, .list-leave-active, .list-move {
    transition: all 0.3s ease;
  }
  .list-leave-active {
    position: absolute;
  }



</style>
