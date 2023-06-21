<template>
  <header ref="header">
    <mb-header-title>MapBox</mb-header-title>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MbHeaderTitle from '@/components/ui/mbHeaderTitle.vue';

export default defineComponent({
  name: 'mbHeader',
  components: { MbHeaderTitle },
  data() {
    return {
      className: 'welcome-loading'
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.header.classList.add(this.className)
    }, 3000)
  }
});
</script>

<style scoped>
header {
  position: absolute;
  z-index: 1;
  width: 100%;
  background: white;
  transition: height 1s ease-in-out;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-loading {
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
}
</style>