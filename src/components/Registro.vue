<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #39C0ED;">
        <div class="container-fluid">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
              <a href="/login2" class="text-dark">Regresar</a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
      <h2>Bienvenidos al proceso de registo</h2>

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
      <p class="note note-info">
        <strong>Importante Leer:</strong>
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
</template>