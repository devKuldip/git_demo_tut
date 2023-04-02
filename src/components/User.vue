<script setup>
import { ref, computed, onMounted } from "vue";
import BaseButtun from "./BaseButtun.vue";
// import { defineProps, defineEmit, useContext } from "vue";
// const my_name = "Kuldeep kumar";

const name = ref("Kuldip");
const isNamePresent = computed(() => name.value.length > 0);

function submitName(e) {
  // e.preventDefault();
  console.log("Clicked to submit", e);
}
const changeUserName = (e) => {
  console.log("Clicked to change", e);
  // emit("delete", "updated name is KKA");
};

const props = defineProps({
  my_name: String,
});
const emit = defineEmits(["change", "delete"]);
// const { slots, attrs } = useContext();
</script>

<template>
  <p>User from Child components {{ my_name }}</p>
  <BaseButtun @onClick="changeUserName($event)" buttonText="Sujjbmit" />
  <!-- <button @click="changeUserName">Click Me</button> -->
  <!-- <div>Hello, {{ name }}!</div>
  <input v-model="name" />
  <button :disabled="!isNamePresent" @click="submitName">Submit</button> -->
</template>
