<template>
  <div>
    <input v-model="value" type="text" />
    <span>{{ errorMessage }}</span>
  </div>
</template>
<script setup>
import { useField } from "vee-validate";
import * as yup from "yup";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
const { errorMessage, meta, value } = useField(
  () => props.name,
  yup.string().required(`${props.name} is required`)
);
</script>
<style>
input {
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px 12px;
  color: #000;
  margin-bottom: 12px;
}
</style>
