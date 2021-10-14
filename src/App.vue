<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Login2 from './components/Login2.vue'
import Inicio from './components/Inicio.vue'
import Registro from './components/Registro.vue'
import RestaContra from './components/RestaContra.vue'
import Inscripcion from './components/Inscripcion.vue'

export default {
  name: 'App',

  data: () => ({
    
  }),
  components: {
    Footer,
    Login2,
    Inicio,
    Registro,
    RestaContra,
    Inscripcion,
  }
};
</script>

<style>
  #app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>