<template>
  <v-layout column>
    <h3 class="primary--text">Organizer</h3>
    <v-container grid-list-md fluid class="mt-0">
      <v-layout row wrap class="list-organizers">
        <v-flex xs12 v-for="organizer in organizers" :key="organizer.name">
          <v-card light class="mt-2 mb-2">
            <v-card-media :src="organizer.logo" height="330px" />
            <v-card-title class="justify-center">
                <h3 class="headline black--text">{{ organizer.name }}</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <h4 class="primary--text mt-5">Co-Organizer</h4>
      <v-container grid-list-md fluid>
        <v-layout row wrap class="list-supporting-organizers">
          <v-flex xs12 md6 lg6 v-for="organizer in coOrganizers" :key="organizer.name">
            <v-card light>
              <v-card-media :src="organizer.logo" height="230px" />
              <v-card-title primary-title class="justify-center">
                <h3 class="headline black--text">{{ organizer.name }}</h3>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    <h4 class="primary--text mt-5">Supporting Organizer</h4>
    <v-container grid-list-md fluid>
      <v-layout row wrap class="list-supporting-organizers">
        <v-flex xs12 md6 lg6 v-for="organizer in supporting" :key="organizer.name">
          <v-card light>
            <v-card-media :src="organizer.logo" height="230px" />
            <v-card-title primary-title class="justify-center">
              <h3 class="headline black--text">{{ organizer.name }}</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<style lang="stylus" src="./page.styl"></style>

<script>
  export default {
    data() {
      return {
        organizers: [
          { name: 'SITCON x HK Community', logo: '/2018/img/icons/logo-312x312.png' },
        ],
        coOrganizers: [
          { name: 'SITAHK', logo: '/2018/img/logos/sita.png' },
        ],
        supporting: [
          { name: 'Apps Resource Centre, HKBU', logo: '/2018/img/logos/hkbuarc.png' },
          { name: 'Hong Kong Creative Technology Association', logo: '/2018/img/logos/cota.png' },
          { name: 'Open Source Hong Kong', logo: '/2018/img/logos/oshk.png' },
          { name: 'Hong Kong Linux User Group', logo: '/2018/img/logos/hklug.jpg' },
          { name: 'SITCON - TW Community', logo: '/2018/img/logos/sitcontw.png' },
        ],
      };
    },
  };
</script>
