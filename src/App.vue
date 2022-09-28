<template>
  <SideBar />

   <router-view />
</template>



<script>
  import { onUpdated, ref } from 'vue'
import SideBar from './components/Sidebar.vue'
  export default {
    components: { SideBar},
  
    
    
  }


</script>

<style scoped>


</style>
