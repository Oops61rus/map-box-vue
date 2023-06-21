<template>
  <div class="map-container">
    <div id="map"></div>


    <map-portal-buttons @onClickButton="toCity" />
    <map-layers
      :checkboxList="checkboxList"
      @onChange="onChangeCheckbox"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { MapBoxHelper } from '@/helpers/mapBox.helper';
import MbButton from '@/components/ui/mbButton.vue';
import MapPortalButtons from '@/components/map/mapPortalButtons.vue';
import MapLayers from '@/components/map/mapLayers.vue';

export default defineComponent({
  name: 'mb-map-box',
  components: { MapLayers, MapPortalButtons, MbButton },
  data() {
    return {
      checkboxList: [
        { id: 'poi-pinball', checked: false, name: 'Pinball machines' },
        { id: 'poi-opensense', checked: false, name: 'Sensors' },
      ]
    }
  },
  methods: {
    ...mapActions(['fetchOpenSensePoints', 'fetchPinballPoints']),
    map() {
      return window['map'];
    },
    toCity(city) {
      this.map().jumpTo(city);
    },
    onChangeCheckbox({ id, checked }) {
      this.map().showLayout(id, checked)
    }
  },
  computed: {
    ...mapGetters(['getOpenSensePoints', 'getPinballPoints']),
  },
  mounted() {
    window['map'] = new MapBoxHelper();

    Promise.all([this.fetchOpenSensePoints(), this.fetchPinballPoints()])
      .then(() => {
        const places = {
          type: 'FeatureCollection',
          features: [...this.getOpenSensePoints, ...this.getPinballPoints]
        }

        this.map().addSource(places)
      })
  },
});
</script>

<style>
.map-container {
  position: relative;
  height: 100vh;
}

#map {
  height: 100%;
}

.maplibregl-control-container {
  display: none;
}
</style>