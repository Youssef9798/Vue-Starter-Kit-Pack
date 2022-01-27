<template>
  <v-col cols="12">
      <v-app-bar  dense dark elevation="1">
        <v-app-bar-title>The App Name</v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs class="v-tabs-bar" color="#1d1d1d">
            <v-tab><router-link to="/" active-class="active" tag="a" exact>Home</router-link></v-tab>
            <v-tab><router-link to="/link1" active-class="active" tag="a">Link 1</router-link></v-tab>
          </v-tabs>
        </template>
      </v-app-bar>      
  </v-col>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .v-tabs-bar {
    background: #eeeeee !important;
    .v-tab {
      text-transform: none !important;
      a{
        color: #1d1d1d;
        text-decoration: none;
      }
      &::before{
        background: #252525;
      }
    }
    .v-tab--active{
      background: #ccc;
    }
  }
</style>