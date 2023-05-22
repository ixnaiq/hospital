<template>
  <div id="app">
    <home/>
    <Patient/> 
    <Doctor/> 

  </div>
</template>

<script>
  import Home from './views/home/Home.vue';
  import Patient from './views/patient/Patient.vue'
  import Doctor from './views/dooctor/Doctor.vue'

export default {
  name: 'App',
  components: {
    Home,
    Patient,
    Doctor,
    
  }
}
</script>

<style>
  @import "../src/assets/css/base.css"
</style>
