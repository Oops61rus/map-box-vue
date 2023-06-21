<template>
  <h1 class="main-title">
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'mb-header-title',
});
</script>

<style scoped>
.main-title {
  font-size: 40px;
  text-align: center;
}
</style>