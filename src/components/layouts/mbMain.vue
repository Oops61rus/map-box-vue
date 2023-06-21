<template>
  <main>
    <mb-map-box />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MbMapBox from '@/components/map/mapBox.vue';

export default defineComponent({
  name: 'mbMain',
  components: { MbMapBox },
});
</script>

<style scoped>
</style>