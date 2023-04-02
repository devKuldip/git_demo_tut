<script setup>
import { vMaska } from "maska";
// import { ref } from "vue";
// const phoneNumber = ref();
import { useField } from "vee-validate";
import { onMounted, ref } from "vue";
import * as yup from "yup";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
// const phoneInput = ref();
// onMounted(() => {
//   console.log(phoneInput);
//   phoneInput.value.focus();
// });
const { errorMessage, meta, value } = useField(
  () => props.name,
  yup.string().required(`${props.name} is required`)
);
</script>

<template>
  <input v-maska data-maska="(###) ###-####" v-model="value" v-focus />
  <span>{{ errorMessage }}</span>
  <span>{{ meta }}</span>
</template>

<!-- Otp For nuberic  -->
<!-- inputType="number" -->
