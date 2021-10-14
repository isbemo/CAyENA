<template>
    <div id="intro" class="bg-image shadow-2-strong">
        <div class="mask d-flex align-items-center h-100" style="background-color: rgba(0, 0, 0, 0.8)">
        <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-md-8">
                       <div class="container mt-5">
      <div class="card mb-3 border" style="max-width: 340px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://indoamericana.edu.co/wp-content/uploads/2017/02/PROCESO-DE-INSCRIPCION-FORMULARIO-ONLINE-INDOAMERICANA.png"
              alt="..."
              class="img-fluid"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body ">
              <div>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-primary "
                  data-mdb-toggle="modal"
                  data-mdb-target="#staticBackdrop"
                >
                  Iniciar Proceso
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-mdb-backdrop="static"
                  data-mdb-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          Importante Leer
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-mdb-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                          <p class="card-text">
                              <ul>
                                <li>Debe tener a la mano fotocopia en PDF del
                                   registro civil totalmente legible del aspirante 
                                   a admitir en la institución.</li>
                                <li>Si es mayor a 7 años, fotocopia en PDF al 150% 
                                  del documento de identidad actual y VIGENTE </li>
                                <li>Si aspira para Primer grado hasta Quinto, 
                                  adjuntar Certificado de Notas en PDF totalmente legible
                                   del grado inmediatamente anterior</li>
                                <li>Si aspira para Sexto grado hasta Décimo, 
                                  adjuntar los Certificados de Notas en PDF totalmente legible desde Quinto 
                                  Hasta el grado inmediatamente anterior.</li>
                              </ul>
                            </p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" @click="irInscripcion()" data-mdb-dismiss="modal">Inscribirse</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
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
    irInscripcion(){
      this.$router.push('/inscripcion');
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