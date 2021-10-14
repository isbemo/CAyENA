<template>
<v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="lname"
      :rules="nameRules"
      label="Apellidos"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombres"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Correo Electrónico"
      required
    ></v-text-field>

    <v-text-field
      v-model="phoneNumber"
      :rules="phoneRules"
      label="Teléfono"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Acepte las condicones para poder continuar !']"
      label="Acepta los terminos y condiciones"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      lname: '',
      nameRules: [
        v => !!v || 'Campo Requerido',
        v => (v && v.length <= 30) || 'Apellido muy largo',
      ],
      name: '',
      nameRules: [
        v => !!v || 'Campo Requerido',
        v => (v && v.length <= 30) || 'Nombre muy largo',
      ],
      phoneNumber: '',
      phoneRules: [
        v => !!v || 'Campo Requerido',
        v => (v && v.length <= 10) || 'Teléfono invalido (sobra un número )',
        v => (v && v.length >= 10) || 'Teléfono invalido (falta un número)',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'Correo electrónico no valido',
      ],
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>