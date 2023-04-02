<template>
  <button
    ref="submitButton"
    @click="emitClick"
    :type="buttonType"
    class="btn btn-lg btn-primary btn_cus_primary w-100"
  >
    <span class="indicator-label"> {{ buttonText }} </span>
    <!-- <span class="indicator-progress">
      Please wait...
      <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
    </span> -->
  </button>
</template>
<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    default: "Submit",
  },
  buttonType: {
    type: String,
    default: "button",
  },
});
const emit = defineEmits(["onClick"]);
const emitClick = emit("onClick");
</script>
