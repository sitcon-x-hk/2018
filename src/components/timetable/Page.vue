<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12>
        <div class="primary white--text py-2 px-2 headline">Timetable</div>
        <v-list three-line class="pt-0">
          <template v-for="(session, index) in sessions">
            <v-divider v-if="session.divider" :key="index"></v-divider>
            <v-list-tile v-else-if="session.issue" :key="session.issue">
              <a v-if="session.live" :href="session.live" target="_blank" class="live">
                <template v-if="session.icon">
                  <v-list-tile-avatar>
                    <img :src="session.icon" />
                    <v-icon class="primary white--text">play_arrow</v-icon>
                  </v-list-tile-avatar>
                </template>
                <template v-else>
                  <v-list-tile-avatar>
                    <v-icon class="primary white--text">play_arrow</v-icon>
                  </v-list-tile-avatar>
                </template>
              </a>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ session.issue }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  <template v-if="session.speaker">
                    {{ session.speaker }}
                    <br>
                  </template>
                  <template v-if="session.venue">
                    <v-icon>room</v-icon> {{ session.venue }}
                  </template>
                  <v-icon>access_time</v-icon> {{ session.time }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-else :key="session.title" avatar :to="session.link" :target="linkTarget">
              <v-list-tile-avatar>
                <img :src="session.icon" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ session.title }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ session.speaker }}
                  <br>
                  <v-icon>room</v-icon> {{ session.venue }}
                  <v-icon>access_time</v-icon> {{ session.time }}
                  <v-icon>chat_bubble</v-icon> {{ session.language }} (with English slides)
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<style scoped lang="stylus">
  .list
    border 1px solid rgba(0,0,0,0.12)
    .live
      img
        display: block
        width: 48px
        height: 48px
        object-fit: cover
      .material-icons
        background-color: transparent !important
        border-color: transparent !important
        position: absolute
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(0,0,0,.4);
  .list >>> .list__tile
    user-select:inherit
</style>

<script src="./script.js"></script>
