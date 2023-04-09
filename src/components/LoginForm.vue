<script setup>
import { useForm } from "vee-validate";
import { onMounted, ref } from "vue";
import BaseInput from "./BaseInput.vue";
import PhoneInput from "./PhoneInput.vue";
import Recaptcha from "./Recaptcha.vue";
const { handleSubmit } = useForm();
// const emailInput = ref(null);
// onMounted(() => {
//   console.log(emailInput.value);
//   emailInput.value.focus();
// });
const onSubmit = handleSubmit((values, errors) => {
  // Submit to API
  console.log(errors);
  console.log(values);
  let user = values;
  // const latestValues = Object.values(values).map((item) =>
  //   item.replace(/\s+/g, "")
  // );
  for (let key in user) {
    // user[key] = user[key].trim();
    if (typeof user[key] === "string") {
      user[key] = user[key].replace(/\s+/g, "");
    }
  }
  console.log("latest values", user);
});
// const vFocus = {
//   mounted: (el) => el.focus(),
// };
</script>

<template>
  <form @submit.prevent="onSubmit">
    <BaseInput name="email" />
    <BaseInput name="password" />
    <PhoneInput name="mobile" />
    <Recaptcha />
    <button type="submit" class="pr_btn">Submit</button>
  </form>
</template>
<style>
.pr_btn {
  padding: 6px;
  border: 1px solid #000;
  color: #000;
  background-color: bisque;
}
</style>
