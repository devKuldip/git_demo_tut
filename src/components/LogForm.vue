<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        v-model="email"
        v-validate="'required|email'"
      />
      <!-- <span v-if="errors.has('email')" class="error-message">{{
        errors.first("email")
      }}</span> -->

      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        v-model="password"
        v-validate="'required'"
      />
      <!-- <span v-if="errors.has('password')" class="error-message">{{
        errors.first("password")
      }}</span> -->

      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  validateOnBlur: true,
});

const { value: email } = useField("email");
const { value: password } = useField("password");

function submitForm() {
  handleSubmit(async () => {
    // Perform login request with email and password
    console.log(
      "Logged in with email:",
      email.value,
      "and password:",
      password.value
    );
  })();
}
</script>
