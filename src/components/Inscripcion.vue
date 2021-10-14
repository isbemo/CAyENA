<template>  
  <div>
      <button type="button" class="btn btn-primary mb-3" data-mdb-toggle="modal" data-mdb-target="#dpa">
        <i class="fas fa-user-alt fa-10x mt-3 mb-3"></i>
        <h5 class="card-title">Datos Personales <br />Aspirante</h5>
      </button>

      <button type="button" class="btn btn-primary mb-3" data-mdb-toggle="modal" data-mdb-target="#dpac">
        <i class="fas fa-address-book fa-10x mt-3 mb-3"></i>
        <h5 class="card-title">Datos Complementarios</h5>
      </button>

      <button type="button" class="btn btn-primary mb-3" data-mdb-toggle="modal" data-mdb-target="#dfa">
        <i class="fas fa-users fa-10x mt-3 mb-3"></i>
        <h5 class="card-title">Datos de Familiares</h5>
      </button>

      <button type="button" class="btn btn-primary mb-3" data-mdb-toggle="modal" data-mdb-target="#daa">
        <i class="fas fa-user-graduate fa-10x mt-3 mb-3"></i>
        <h5 class="card-title">Datos Escolares</h5>
      </button>                
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