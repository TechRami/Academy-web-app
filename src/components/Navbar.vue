<template>
    <div class="flex w-full p-6 md:hidden h-24">
        <button @click="isOpen = !isOpen" value="Close Sidebar" type="button" class="text-gray">
                    <Bars3Icon class="h-9 w-9"></Bars3Icon>
        </button>
      <TransitionRoot :show="isOpen">
          <Dialog as="div" :open="isOpen" @close="isOpen = !isOpen" class="fixed inset-0 z-40 md:hidden">
            <TransitionChild
                enter="transition ease-in-out duration-500 transform"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transition ease-in-out duration-500 transform"
                leave-from="translate-x-0"
                leave-to="-translate-x-full"
                as="template"
            
            >
                    <div class="w-80 flex flex-col md:hidden relative z-10 h-full bg-white">
                        <button @click="isOpen = !isOpen" value="Close Sidebar" type="button" class="absolute top-8 right-5 text-gray">
                        <Bars3Icon class="h-9 w-9"></Bars3Icon>
                        </button>
                        <div class="py-8 px-8">
                            <img class="w-18" src="../assets/logo.svg" alt="academy-logo.svg">
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
            </TransitionChild>
        <TransitionChild 
            enter="transition-opacity ease-linear duration-200"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
            as="template"
            > 
                
                <DialogOverlay value="Close Sidebar" class="fixed inset-0 bg-lightgray bg-opacity-50 md:hidden"></DialogOverlay>
            </TransitionChild>
            </Dialog>
      </TransitionRoot>
  </div>
</template>

<script>
    import {TransitionRoot, TransitionChild, Dialog, DialogOverlay, Menu, MenuButton} from '@headlessui/vue'
    import {Bars3Icon, ChevronDoubleRightIcon, HomeIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, BookOpenIcon } from '@heroicons/vue/24/outline'
export default {
    components: { HomeIcon, Bars3Icon, TransitionRoot, TransitionChild, Dialog, DialogOverlay, ChevronDoubleRightIcon},

    data(){
        return{
        width:"",
        isOpen: false,
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

<style scoped>

   .desktop-nav-closed {
        position: absolute;
        left: -100%;
    }

    .desktop-nav-opened {
        position: absolute;
        left: 0%;
    }

</style>