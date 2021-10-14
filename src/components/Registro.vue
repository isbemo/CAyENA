<template>
  <div class="container mt-5">
    <form>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row justify-content-evenly mb-4">
        <div class="col-12 col-sm-6 mb-3">
          <div class="form-outline ">
            <input type="text" id="form3Example1" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example1">Primer Nombre</label>
          </div>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <div class="form-outline">
            <input type="text" id="form3Example2" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example2">Demás Nombres</label>
          </div>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <div class="form-outline">
            <input type="text" id="form3Example1" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example1"
              >Primer Apellido</label
            >
          </div>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <div class="form-outline">
            <input type="text" id="form3Example2" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example2"
              >Demás Apellidos</label
            >
          </div>
        </div>
      </div>
      <div class="row justify-content-evenly mb-4">
        <!-- Email input -->
        <div class="col-12 col-sm-6 mb-3">
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example3"
              >Correo Electrónico</label
            >
          </div>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <div class="form-outline mb-4">
            <input type="text" id="form3Example3" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example3">Teléfono</label>
          </div>
        </div>

        <div class="col-12 col-sm-6 mb-3">
          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="form3Example4" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example4">Contraseña</label>
          </div>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="form3Example4" class="form-control border border-dark rounded-pill" />
            <label class="form-label text-dark" for="form3Example4"
              >Confirmar Contraseña</label
            >
          </div>
        </div>
      </div>
      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          id="form2Example33"
          checked
        />
        <label class="form-check-label text-dark" for="form2Example33">
          Acepto los términos y condiciones.
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Registrar
      </button>
    </form>
  </div>
</template>