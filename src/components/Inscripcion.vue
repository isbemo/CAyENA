<template>  
  <div>
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #39C0ED;">
        <div class="container-fluid">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
              <a href="/login2" class="text-dark">Salir</a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>

      <div class="container pt-5 d-flex flex-wrap justify-content-evenly">
          <div>
            <ul class="nav nav-pills mb-3" id="pills-tab2" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab2"
                  data-mdb-toggle="pill"
                  data-mdb-target="#pills-home2"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  >Datos Personales
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab2"
                  data-mdb-toggle="pill"
                  data-mdb-target="#pills-profile2"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  >Datos Complementarios
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab2"
                  data-mdb-toggle="pill"
                  data-mdb-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  >Datos de Familiares
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab2"
                  data-mdb-toggle="pill"
                  data-mdb-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  >Datos Escolares
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent2">
              <div
                class="tab-pane fade show active"
                id="pills-home2"
                role="tabpanel"
                aria-labelledby="pills-home-tab2"
                >Tab 1 content
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile2"
                role="tabpanel"
                aria-labelledby="pills-profile-tab2"
                >Tab 2 content
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact2"
                role="tabpanel"
                aria-labelledby="pills-contact-tab2"
                >Tab 3 content
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact2"
                role="tabpanel"
                aria-labelledby="pills-contact-tab2"
                >Tab 4 content
              </div>
          </div>
          </div>
        <!--<ul class="nav nav-pills mb-3" id="pills-tab2" role="tablist">
          <li class="nav-item" role="presentation">
            <button id="pills-home-tab2" type="button" class="btn btn-primary mb-3" data-mdb-toggle="pill" data-mdb-target="#pills-home2" role="tab" aria-controls="pills-home" aria-selected="true">
              <i class="fas fa-user-alt fa-10x mt-3 mb-3"></i>
              <h5 class="card-title">Datos Personales</h5>
            </button>
          </li>
        
          <li class="nav-item" role="presentation">
            <button id="pills-home-tab2" type="button" class="btn btn-primary mb-3" data-mdb-toggle="pill" data-mdb-target="#pills-home2" role="tab" aria-controls="pills-home" aria-selected="true">
              <i class="fas fa-address-book fa-10x mt-3 mb-3"></i>
              <h5 class="card-title">Datos Complementarios</h5>
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button id="pills-home-tab2" type="button" class="btn btn-primary mb-3" data-mdb-toggle="pill" data-mdb-target="#pills-home2" role="tab" aria-controls="pills-home" aria-selected="true">
              <i class="fas fa-users fa-10x mt-3 mb-3"></i>
              <h5 class="card-title">Datos de Familiares</h5>
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button id="pills-home-tab2" type="button" class="btn btn-primary mb-3"  data-mdb-toggle="pill" data-mdb-target="#pills-home2" role="tab" aria-controls="pills-home" aria-selected="true">
              <i class="fas fa-user-graduate fa-10x mt-3 mb-3"></i>
              <h5 class="card-title">Datos Escolares</h5>
            </button>
          </li> 
        </ul>
      
      ------Pills content ----
        <div class="tab-content" id="pills-tabContent2">
          <div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab2">
            Tab 1 content
          </div>
          <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
            Tab 2 content
          </div>
          <div class="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">
            Tab 3 content
          </div>
          <div class="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">
            Tab 4 content
          </div>
        </div>-->

      </div>              
  </div>
</template>


<style>


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