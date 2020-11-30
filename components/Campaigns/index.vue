<template>
  <div class="">
    <div class="flex flex-row">
      <div class="bg-gray-200 lg:block hidden w-1/5">
        <DesktopNav />
      </div>
      <div class="flex-grow bg-gray-200 lg:block hidden w-4/5">
        <Main />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="bg-white lg:hidden flex">
        <button
          v-if="side"
          class="absolute z-10 text-black right-0 p-2"
          @click="hide"
        >
          <i class="fas fa-times text-2xl"></i>
        </button>
        <MobileNav />
      </div>
      <div class="lg:hidden block bg-gray-200 min-h-screen">
        <Main />
      </div>
    </div>
  </div>
</template>
<script>
import MobileNav from '../General/MobileNav'
import DesktopNav from '../General/DesktopNav'
import Main from './main'
export default {
  components: {
    DesktopNav,
    Main,
    MobileNav,
  },
  computed: {
    side() {
      return this.$store.state.element.side
    },
  },
  methods: {
    hide() {
      this.$store.commit('element/showNav', false)
      console.log('I am clicking')
    },
  },
}
</script>
<style scoped></style>
