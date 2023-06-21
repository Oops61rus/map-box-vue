<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'mb-button',
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
.button {
  cursor: pointer;
  background: white;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 4px 8px;
  transition: all .3s;
}
.button:hover {
  background: #DDD;
  color: #333;
}
</style>