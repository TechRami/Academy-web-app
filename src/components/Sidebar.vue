<template>
    <div class="flex min-h-screen ease-in-out duration-500 px-8" :class="{' w-80': isOpen, 'w-36': !isOpen}">
      
        
        <div class="flex flex-col justify-between ease-in-out duration-500 relative" :class="{'desktop-nav-opened': isOpen, 'desktop-nav-closed': !isOpen}">
            <button @click="isOpen = !isOpen" type="button" class="order-2 px-8 bottom-24 absolute ease-in-out duration-500" :class="{'rotatee-180': !isOpen}">
                <!-- <Bars3Icon class="h-9 w-9"></Bars3Icon> -->
                <ChevronDoubleRightIcon class="h-7 w-7"/>
            </button>
            <div>
                <div class="py-8 px-8 p-6">
                       <img class="w-18" src="../assets/logo.svg" alt="academy-logo.svg" >
                </div>
                   <a v-for="item in navItems" :key="item.label"
                       :href="item.href"
                       class="flex items-center pl-8 pr-20 py-5 rounded-lg text-gray-50 font-semibold text-lg text-lightgray hover:text-gray hover:bg-lightpurple ease-in-out duration-300" >
                       <component
                           :is="item.icon"
                           class="w-8 h-8 mr-8">
                       </component>
                       <span class="transition-opacity ease-in-out duration-300" :class="{'opacity-0': !isOpen}">{{item.label}}</span>
                   </a>
            </div>
               
        </div>
    </div>
</template>

<script>
    import {TransitionRoot, TransitionChild, Dialog, DialogOverlay, Menu, MenuButton} from '@headlessui/vue'
    import {Bars3Icon, ChevronDoubleRightIcon, HomeIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, BookOpenIcon } from '@heroicons/vue/24/outline'
import { computed } from '@vue/reactivity';
import { onActivated, onMounted, onUpdated, ref, watch } from 'vue';
    export default {
        components: { HomeIcon, Bars3Icon, TransitionRoot, TransitionChild, Dialog, DialogOverlay, ChevronDoubleRightIcon},

        data(){
            return{
            width:"",
            isOpen: true,
            }
            },

            created() {
            window.addEventListener("resize", this.reSizer);
            },
            destroyed() {
            window.removeEventListener("resize", this.reSizer);
            },
            methods: {
            reSizer() {
                this.width=window.innerWidth;
                console.log(this.isOpen);

                if (this.width < '1186') {
                    console.log(this.width)
                    this.isOpen = false
                } 
                // else {
                //     this.isOpen = true
                // }
            }
            },
        setup() {
            const navItems = [
                { href: '/', label: 'Dashboard', icon: HomeIcon},
                { href: '/', label: 'Courses', icon: BriefcaseIcon},
                { href: '/', label: 'Homework', icon: BookOpenIcon},
                { href: '/', label: 'Chat', icon: ChatBubbleLeftRightIcon}
            ];
      
            return { navItems }
        }

      
    }
</script>


<style>
    /* .desktop-nav-closed {
        position: absolute;
        left: -100%;
    }

    .desktop-nav-opened {
        position: absolute;
        left: 0%;
    } */

    /* .isCollapse {
        opacity: 0;
    } */
    .rotatee-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

    .isClose {

    }
</style>