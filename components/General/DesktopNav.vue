<template>
  <div class="h-screen relative">
    <!-- component -->
    <div class="flex flex-col __bg fixed">
      <div
        class="flex flex-col w-full md:w-64 text-gray-700 dark-mode:text-gray-200 flex-shrink-0 min-h-screen"
      >
        <div
          class="flex-shrink-0 px-6 pt-8 pb-4 flex flex-row items-center justify-between"
        >
          <div class="">
            <h3 class="text-green-600 text-lg font-bold">Editor</h3>
          </div>
        </div>
        <div
          class="my-4 border border-white border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50"
        ></div>
        <nav class="flex flex-col px-4 pb-4">
          <div
            v-for="(pick, i) in bar"
            :key="i"
            class="flex flex-row justify-between items-center"
          >
            <div class="p-2 flex flex-row w-full">
              <div>
                <i :class="pick.fonts" class="text-white font-display"></i>
              </div>
              <div class="text-white ml-4 font-display">
                <a href="#">
                  {{ pick.content }}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bar: [
        {
          fonts: ' fas fa-volume-up',
          content: 'Campaigns',
        },
        {
          fonts: 'fas fa-globe ',
          content: 'Websites',
        },
        {
          fonts: 'fas fa-sign-out-alt ',
          content: 'Leads',
        },
        {
          fonts: 'far fa-paper-plane',
          content: 'Integrations',
        },
        {
          fonts: 'far fa-user',
          content: 'Profile',
        },
        {
          fonts: 'fas fa-photo-video',
          content: 'Media',
        },
      ],
    }
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
.__bg {
  background: rgba(13, 17, 43, var(--bg-opacity));
}
</style>
