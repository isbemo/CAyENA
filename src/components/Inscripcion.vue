<template>  
  <div>
      <!--<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #39C0ED;">
        <div class="container-fluid">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
              <a href="/login2" class="text-dark">Salir</a>
              </li>
            </ol>
            <div class="d-flex align-items-center">
              <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuLink"
                  role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-circle" height="25"
                    alt="" loading="lazy"/>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">Mi prefil</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Cerrar Sección</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>-->
      <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/login2">Salir</a>
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
          <!-- Notifications -->
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger">0</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>

          <!-- Avatar -->
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="/login2"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              class="rounded-circle"
              height="25"
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#">Mi perfil</a>
            </li>
            <li>
              <a class="dropdown-item" href="/login2">Cerrar</a>
            </li>
          </ul>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->

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
              <div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab2">
                  <div id="Relleno">
                    <h1></h1><br> 
                    Primer Nombre:
                    <input id="email" type="email" name="email" v-model="email" placeholder="Primer Nombre"/>
                  </div>
                  <div id="Relleno">
                    Segundo Nombre:
                    <input id="nombre2" type="nombre2" name="nombre2" placeholder="Segundo Nombre"/>
                  </div>
                  <div id="Relleno">
                    Primer Apellido:
                    <input id="lastname" type="lastname" name="lastname" placeholder="Primer Apellido"/>
                  </div>
                  <div>
                    Demás Apellidos:
                    <input id="lastname2" type="lastname2" name="lastname2" placeholder="Segundo Apellido"/>
                  </div>
                  <div>
                    Contraseña:
                    <input id="pswd" type="text" name="password" placeholder="Contraseña"/>
                    <a>
                      <button type="button" class="btn btn-secondary btn-rounded btn-sm " @click ="update">Guardar</button>
                    </a>
                  </div>
                  <div>
                    <a>
                      <button type="button" class="btn btn-success btn-sm " @click="search">Buscar</button>
                      <button class="btn btn-danger btn-sm " @click="deleteFunction">Borrar</button>
                    </a>
                    <a>
                      <button @click="searchAll" hidden>SearchAll</button>
                        <button type="button" class="btn btn-warning btn-sm " @click="deleteAll">Borrar Todo</button>
                    </a>
                  </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile2"
                role="tabpanel"
                aria-labelledby="pills-profile-tab2"
                >Próximo a mostrar
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact2"
                role="tabpanel"
                aria-labelledby="pills-contact-tab2"
                >Próximo a mostrar
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact2"
                role="tabpanel"
                aria-labelledby="pills-contact-tab2"
                >Próximo a mostrar
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
        </ul>-->

      </div>
      <div>
        <h1></h1><br>
        <p class="note note-danger">
        <strong>Importante Leer:</strong>
         <ul>
            <li>Todas las modificaciones que se realicen quedaran guardadas en nuestra base de datos.</li>
            <li>Por favor solo modifique lo necesario.</li>
          </ul> 
        </p> 
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