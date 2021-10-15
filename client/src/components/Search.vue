<template>
<div>
    <div>
      <h2 id="msg" style="color:red"></h2>
    </div>
  <h1>Search</h1>
  <div>
    Primer nombre:
    <input
      id="email"
      type="email"
      name="email"
      v-model="email"
      placeholder="Primer Nombre"/>
    Segundo nombre:
      <input
        id="nombre2"
        type="nombre2"
        name="nombre2"
        placeholder="Segundo Nombre"/>
  </div>
  <div>
    Primer apellido:
    <input
      id="lastname"
      type="lastname"
      name="lastname"
      placeholder="Primer Apellido"/>
    Demás Apellidos:
      <input
        id="lastname2"
        type="lastname2"
        name="lastname2"
        placeholder="Segundo Apellido"/>
  </div>
  <div>
  Contraseña:
    <input
    id="pswd"
    type="text"
    name="password"
    placeholder="Contraseña"/>
  <a>
    <button @click ="update">Save</button>
    </a>
  </div>
  <div>
    <a>
    <button @click="search">Search</button>
    <button @click="deleteFunction">Delete</button>
    </a>
    <a>
      <button @click="searchAll" hidden>SearchAll</button>
      <button @click="deleteAll">DeleteAll</button>
    </a>
  </div>
</div>
</template>

<script>
import SearchService from '@/services/SearchService.js'
import DeleteService from '@/services/DeleteService.js'
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    async search () {
      //  console.log(this.email)
      const response = await SearchService.search({
        nombre: this.email,
        nombre2: this.nombre2,
        lastname: this.lastname,
        lastname2: this.lastname2})
      // console.log(`Respuesta BackEnd: ${JSON.stringify(response.data)}`)
      if (response.data !== 'No Existe') {
        document.getElementById('nombre2').value = response.data.nombre2
        document.getElementById('lastname').value = response.data.apellidos
        document.getElementById('lastname2').value = response.data.apellido2
        document.getElementById('pswd').value = response.data.clave
        // document.getElementById('msg').innerhtml = ''
      } else {
        console.log(response.data.clave)
        document.getElementById('msg').innerHTML = 'No existe usuario'
      }
      console.log(response)
    },
    async update () {
      // this.search()
      // console.log('Usuario y contraseña:', this.email, document.getElementById('pswd').value)
      const response = await SearchService.update({
        nombre: document.getElementById('email').value,
        nombre2: document.getElementById('nombre2').value,
        apellidos: document.getElementById('lastname').value,
        apellido2: document.getElementById('lastname2').value,
        clave: document.getElementById('pswd').value})
      if (response.data !== 'No Existe') {
        document.getElementById('pswd').value = ''
        document.getElementById('msg').innerHTML = ''
        // console.log(response.data.clave)
      } else {
        console.log(response.data.clave)
        document.getElementById('msg').innerHTML = 'No existe usuario'
      }
      console.log(response)
    },
    async deleteFunction () {
      console.log(this.email)
      const response = await DeleteService.delete({
        nombre: this.email})
      if (response.data !== 'No Existe') {
        this.email = ''
        document.getElementById('nombre2').value = ''
        document.getElementById('lastname').value = ''
        document.getElementById('lastname2').value = ''
        this.pswd = ''
        document.getElementById('msg').innerHTML = 'Usuario eliminado'
      } else {
        console.log(response.data.clave)
        document.getElementById('msg').innerHTML = 'No existe usuario'
      }
      console.log(response)
    },
    async searchAll () {
      const response = await SearchService.searchAll({})
      console.log(response)
    },
    async deleteAll () {
      const response = await DeleteService.deleteAll({})
      document.getElementById('msg').innerHTML = 'Base de datos eliminada'
      console.log(response)
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
      document.getElementById('pswd').value = ''
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
  button{
    border:solid 1px green;
    background-color: lightgreen;
    padding: 10px;
    border-radius: 25px;
  }
</style>
