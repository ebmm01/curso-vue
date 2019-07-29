<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4"> Lista de filmes</h1>
        <p class='lead'>Treinando comunicação entre Components no Vue</p>
      </div>
    </div>

    <div class="container">
      <FilmesLista/>
    </div>  
  </div>
</template>

<script>
import FilmesLista from './components/FilmesLista.vue'

export default {
  name: 'app',
  components: {
    FilmesLista
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
