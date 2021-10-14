<template>
    <div id="intro" class="bg-image shadow-2-strong">
        <div class="mask d-flex align-items-center h-100" style="background-color: rgba(0, 0, 0, 0.8)">
        <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-md-8">
                        <div class="vue-tempalte">
                            <form class="rounded shadow-5-strong p-5" style="background-color: rgba(2, 55, 125, 0.25)">
                            <h3 class="text-primary">Reestablecer Contraseña</h3>
                                <div class="form-outline mb-4 border border-light rounded-pill">
                                    <input type="email" id="form1Example1" class="form-control" autocomplete="off"/>
                                    <label class="form-label" for="form1Example1">Correo</label>
                                </div>
                                <div class="form-outline mb-4 border border-light rounded-pill">
                                    <input type="password" id="form1Example2" class="form-control"/>
                                    <label class="form-label" for="form1Example2">Nueva Contraseña</label>
                                </div>
                            <button type="button" class="btn btn-success btn-lg btn-block mb-3" data-mdb-toggle="modal"
                                data-mdb-target="#staticBackdrop">Continuar
                            </button>
                            <button type="button" @click="volverLogin()" class="btn btn-danger btn-lg btn-block mb-3"
                                data-mdb-target="#staticBackdrop">Salir
                            </button>
                            <div class="modal fade" id="staticBackdrop" data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Reestauración exitosa!</h5>
                                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="card-text">
                                                <ul>
                                                Se ha reestablecido su nueva contraseña con exito.<br><br>
                                                Revise su bandeja de entrada o correo no desado para la confirmación de su cambio.
                                                </ul>
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" @click="volverLogin()" class="btn btn-secondary" data-mdb-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods:{
        volverLogin(){
            this.$router.push('/login2');
        }
    }
}
</script>

<style>
#intro {
  background-image: url(https://www.las2orillas.co/wp-content/uploads/2020/07/barranquilla.jpg);
  height: 100vh;
}

/* Height for devices larger than 576px */
@media (min-width: 992px) {
  #intro {
    margin-top: -58.59px;
  }
}

input,
label {
  color: #fff !important;
}
</style>