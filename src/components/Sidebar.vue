<template>
    <div class="flex min-h-screen mx-5">
        <Dialog as="div" :open="isOpen" @close="!isOpen" class="fixed inset-0 z-40 md:hidden">
            <div class="w-80 flex flex-col md:hidden relative z-10 h-full bg-white sc">
               <button @click="isOpen = !isOpen" value="Close Sidebar" type="button" class="absolute top-8 right-5">
                <Bars3Icon class="h-9 w-9"></Bars3Icon>
                </button>
                <div class="py-8 px-8">
                    <img class="w-48" src="../assets/logo.svg" alt="academy-logo.svg">
                </div>
                <div class="overflow-y-auto flex-1">
                    <a v-for="item in navItems" :key="item.label"
                        :href="item.href"
                        class="flex items-center max-w-xs px-8 py-5 rounded-lg text-gray-50 font-semibold text-lg text-lightgray hover:text-gray hover:bg-lightpurple ease-in-out duration-200" >
                        <component
                            :is="item.icon"
                            class="w-8 h-8 mr-5">
                        </component>
                        {{item.label}}
                    </a>
                </div>
            </div>
            <DialogOverlay class="fixed inset-0 bg-lightgray bg-opacity-50 md:hidden"></DialogOverlay>
        </Dialog>


        <div class="w-80 hidden md:block">
            <div class="py-8 px-8">
                <img class="w-48" src="../assets/logo.svg" alt="academy-logo.svg">
            </div>

          
            <a v-for="item in navItems" :key="item.label"
            
                :href="item.href"
                class="flex items-center max-w-xs px-8 py-5 rounded-lg text-gray-50 font-semibold text-lg text-lightgray hover:text-gray hover:bg-lightpurple ease-in-out duration-200" >
                
                <component 
                    :is="item.icon" 
                    class="w-8 h-8 mr-5">
                </component>
                
                {{item.label}}
            </a>
        

        </div>
    </div>
</template>

<script>
    import {TransitionRoot, TransitionChild, Dialog, DialogOverlay, Menu, MenuButton} from '@headlessui/vue'
    import {Bars3Icon, HomeIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, BookOpenIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
    export default {
        components: { HomeIcon, Bars3Icon, TransitionRoot, TransitionChild, Dialog, DialogOverlay, },

        setup(props, context) {
            const navItems = [
                { href: '/', label: 'Dashboard', icon: HomeIcon},
                { href: '/', label: 'Courses', icon: BriefcaseIcon},
                { href: '/', label: 'Homework', icon: BookOpenIcon},
                { href: '/', label: 'Chat', icon: ChatBubbleLeftRightIcon}
            ];

            const isOpen = ref(true)
            

            return { navItems, isOpen }
        }

      
    }
</script>