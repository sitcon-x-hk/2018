<template>
  <v-card light>
    <v-card-title primary-title>
      <div>
        <h3 class="headline black--text">Venue</h3>
        <div>UG/F, LSK Building, The Chinese University of Hong Kong</div>
      </div>
    </v-card-title>
    <v-card-text>

      <gmap-map
        :center="center"
        :zoom="zoom"
      >
        <gmap-marker
          :position="center"
          cliclable
        />
      </gmap-map>
    </v-card-text>
  </v-card>
</template>

<style lang="stylus" scoped>
  .vue-map-container
    width: 100%
    height: 500px
    display: none
</style>

<script>
  import Vue from 'vue';
  import * as VueGoogleMaps from 'vue2-google-maps';

  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GOOGLE_API_KEY,
    },
    installComponents: true,
  });

  export default {
    data() {
      return {
        center: {
          lat: 22.4196819,
          lng: 114.2039352,
        },
        zoom: 15,
      };
    },
  };
</script>
