import Api from '@/services/Api'

export default{
  delete (usuario) {
    try {
      console.log(`Aquí ${JSON.stringify(usuario.nombre)}`)
      return Api().get('delete/user/' + usuario.nombre) // ubicado en app.js del servidor Backend.
    } catch (error) {
      console.log('Ocurrio un error en el BackEnd',
        error)
    }
  },
  deleteAll () {
    try {
      console.log(`Aquí todo`)
      return Api().delete('delete/deleteAll') // ubicado en app.js del servidor Backend.
    } catch (error) {
      console.log('Ocurrio un error',
        error)
    }
  }
}
