import Api from '@/services/Api'

export default{
  search (usuario) {
    try {
      // console.log(`Aquí ${JSON.stringify(usuario)}`)
      return Api().get('search/clave/' + usuario.nombre) // ubicado en app.js del servidor Backend.
    } catch (error) {
      console.log('Ocurrio un error en el BackEnd',
        error)
    }
  },
  searchAll () {
    try {
      console.log(`Aquí todo`)
      return Api().get('search/claveAll') // ubicado en app.js del servidor Backend.
    } catch (error) {
      console.log('Ocurrio un error',
        error)
    }
  },
  update (usuario) {
    try {
      console.log(usuario)
      return Api().put('update/user', usuario) // ubicado en app.js del servidor Backend.
    } catch (error) {
      console.log('Ocurrio un error',
        error)
    }
  }
}
