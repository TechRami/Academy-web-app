<template>
  <div class="flex">
    <SideBar  class="" /> <!-- v-show="smScreen"-->
    <Navbar  class="" />
     <router-view />
  </div>
</template>



<script>
  import { onUpdated, ref } from 'vue'
import SideBar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
  export default {
    components: { SideBar, Navbar},
  
    data(){
    return{
      width:"",
      smScreen: true,
      }
            },

            created() {
            window.addEventListener("resize", this.reSizer);
            },
            destroyed() {
            window.removeEventListener("resize", this.reSizer);
            },
            methods: {
            // reSizer() {
            //     this.width=window.innerWidth;

            //     if (this.width < '1186') {
            //         console.log(this.width, 'screen sm')
            //         this.smScreen = false
            //     } else {
            //       this.smScreen = true
            //     }
            //     else {
            //         this.isOpen = true
            //     }
            // }
      },
  }


</script>

<style scoped>


</style>
