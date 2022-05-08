<template>
  <select v-model="modelValue" @change="changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      modelValue: "",
    };
  },

  methods: {
    changeOptions(event) {
      this.$emit("change:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
