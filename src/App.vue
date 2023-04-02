<script setup>
import { Field } from "vee-validate";
import { ref } from "vue";
import LogForm from "./components/LogForm.vue";
import LoginForm from "./components/LoginForm.vue";
import PhoneInput from "./components/PhoneInput.vue";
const mobile = ref();
</script>

<template>
  <p>Hello</p>
  <!-- <LoginForm /> -->
  <!-- <PhoneInput name="mobile" v-model="mobile" />
  {{ mobile }} -->
  <LoginForm />
  <!-- <Field name="mobile" v-slot="{ value, handleChange }">
  </Field> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
