<template>
<div>
  <h1>Registro</h1>
  <div>
  Primer nombre:
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Primer Nombre"/>
  Segundo nombre:
    <input
      type="nombre2"
      name="nombre2"
      v-model="nombre2"
      placeholder="Segundo Nombre"/>
  </div>
  <div>
  Primer apellido:
    <input
      type="lastname"
      name="lastname"
      v-model="lastname"
      placeholder="Primer Apellido"/>
  Demás Apellidos:
    <input
      type="lastname2"
      name="lastname2"
      v-model="lastname2"
      placeholder="Segundo Apellido"/>
  </div>
  <div>
    Contraseña:
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Contraseña"/>
  </div>
  <div>
    <button @click="register">Registro</button>
    <a href='#/search'>Buscar</a>
  </div>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: '',
      nombre2: '',
      lastname: '',
      lastname2: '',
      password: ''
    }
  },
  methods: {
    async register () {
      //  console.log('Register button was clicked', this.email, this.password)
      const response = await AuthenticationService.register({
        nombre: this.email,
        nombre2: this.nombre2,
        apellidos: this.lastname,
        apellido2: this.lastname2,
        clave: this.password
        /*  email: this.email,
        password: this.password */
      })
      this.email = ''
      this.nombre2 = ''
      this.lastname = ''
      this.lastname2 = ''
      this.password = ''
      console.log(response.data)
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg{
    color: brown
  }
  div{
    margin-top: 10px;
  }
  button,a{
    border:solid 1px green;
    background-color: lightgreen;
    padding: 10px;
    border-radius: 25px;
  }
</style>
