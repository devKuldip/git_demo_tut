<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider
        vid="email"
        name="E-mail"
        rules="required|email"
        v-slot="{ errors }"
      >
        <input v-model="email" type="email" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider
        vid="password"
        name="Password"
        rules="required"
        v-slot="{ errors }"
      >
        <input v-model="password" type="password" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      <button type="submit">Sign up</button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    onSubmit() {
      this.$refs.form.setErrors({
        email: ["This email is already taken"],
      });
    },
  },
};
</script>

<style scoped>
span {
  display: block;
}
</style>
