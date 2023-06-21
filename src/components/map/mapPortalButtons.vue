<template>
  <div class="portals">
    <mb-button @click="$emit('onClickButton', 'Portland')">To Portland</mb-button>
    <mb-button @click="$emit('onClickButton', 'Berlin')">To Berlin</mb-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MbButton from '@/components/ui/mbButton.vue';

export default defineComponent({
  name: 'map-portal-buttons',
  components: { MbButton },
  emits: ['onClickButton'],
});
</script>

<style scoped>
.portals {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
}
</style>