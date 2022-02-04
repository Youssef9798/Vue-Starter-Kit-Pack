<template>
  <v-app>
    <v-main>
      <v-container>
          <v-row>
            <app-header></app-header>
            <router-view></router-view>
          </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import '@/assets/css/main.css';
import Header from '/components/shared/Header';

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
};
</script>


