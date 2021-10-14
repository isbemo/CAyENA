<template>
  <div
    id="intro"
    class="bg-image shadow-2-strong"
    type="text/javascript"
    src="js/mdb.min.js"
  >
    <div
      class="mask d-flex align-items-center h-100"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-md-8">
            <form
              class="rounded shadow-5-strong p-5"
              style="background-color: rgba(2, 55, 125, 0.25)"
            >
              <div
                class="
                  d-flex
                  align-items-start
                  mb-3
                  justify-content-evenly
                  align-items-center
                "
              >
                <figure class="mb-4">
                  <img
                    src="http://1.bp.blogspot.com/_a5mK001oySU/TShQMXc9SsI/AAAAAAAAvUg/5YjnlWXq2T8/s1600/3.png"
                    class="figure-img img-fluid rounded shadow-3 mb-3"
                    alt=""
                    width="100px"
                  />
                </figure>
                <h1 class="text-light">Bienvenido</h1>
              </div>

            
              <!-- Email input -->
                            <div class="form-outline mb-4 border border-light rounded-pill" type="text/javascript" src="js/mdb.min.js">
                                <input type="email" id="form1Example2" class="form-control"/>
                                <label class="form-label" for="form1Example1">Correo</label>
                            </div>
                            <!--Password input-->
                            <div class="form-outline mb-4 border border-light rounded-pill">
                                <input type="password" id="form1Example2" class="form-control"/>
                                <label class="form-label" for="form1Example2">Contraseña</label>
                            </div>
                            <!--2 column grid layout for inline styling -->
                            <div class="row mb-4">
                                <div class="col text-left">
                                    <!--Simple link-->
                                    <a href="/restacontra">Restablecer Contraseña</a>
                                </div>
                            </div>
                            <button type="button" @click="irRegistro()" class="btn btn-secondary btn-block">Registrarse</button>
                            <!--Submit button--> 
                            <button type="button" @click="irInscripcion()" class="btn btn-primary btn-block">Ingresar</button>-->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<script>
import { MDBInput } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBInput,
  },
};
</script>-->

<script>

export default {
    methods:{
        irInscripcion(){
            this.$router.push('/inscripcion');
        },
        irRegistro(){
            this.$router.push('/registro');
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
