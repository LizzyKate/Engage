<template>
  <div>
    <div class="flex flex-row">
      <div class="bg-white lg:block hidden w-1/5">
        <DesktopNav />
      </div>
      <div
        class="flex-grow bg-gray-200 m-8 lg:block hidden w-4/5 overflow-y-scroll h-screen"
      >
        <Main />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="bg-white lg:hidden flex">
        <MobileNav />
      </div>
      <div class="lg:hidden block bg-gray-200 min-h-screen">
        <Main />
      </div>
    </div>
  </div>
</template>
<script>
import MobileNav from '../General/MobileNavTwo'
import DesktopNav from '../General/DesktopNavTwo'
import Main from './main'
export default {
  components: {
    DesktopNav,
    Main,
    MobileNav,
  },
}
</script>
<style scoped></style>
