<template>
  <ul id="map-layer" class="map-layer">
    <li class="layer-item" v-for="checkbox in checkboxList">
      <label class="label-item">
        <input
          type="checkbox"
          @change="onChange(checkbox.id, $event.target.checked)"
          :checked="checkbox.checked"
        />
        {{ checkbox.name }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'mapLayers',
  emits: ['onChange'],
  props: {
    checkboxList: { type: Array, default: [] }
  },
  methods: {
    onChange(id, checked) {
      this.$emit('onChange', { id, checked })
    }
  }
});
</script>

<style scoped>
.map-layer {
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(100%);
  background: white;
  border-radius: 6px;
}

.label-item {
  padding: 4px 8px;
  width: 100%;
  display: flex;
  cursor: pointer;
  font-size: 20px;
  gap: 6px;
  transition: all .3s;
  user-select: none;
}
.label-item:hover {
  background: #DDD;
  color: #333;
}
.layer-item:first-child .label-item {
  border-radius: 6px 6px 0 0;
}
.layer-item:last-child .label-item {
  border-radius: 0 0 6px 6px;
}
</style>