import Api from '@/services/Api'

export default{
  register (credentials) {
    // console.log(credentials)
    return Api().post('register/estudiante', credentials) // ubicado en app.js del servidor Backend.
  }
}
