<template>
  <div class="h-screen relative overflow-y-auto">
    <div class="flex flex-col __bg w-full">
      <div
        class="flex flex-col text-gray-700 dark-mode:text-gray-200 flex-shrink-0 min-h-screen overflow-y-auto"
      >
        <div
          class="flex-shrink-0 px-6 pt-8 pb-4 flex flex-row items-center justify-between w-full"
        >
          <div class="mx-auto">
            <n-link to="/">
              <h3 class="text-green-600 text-lg font-bold">Editor</h3>
            </n-link>
          </div>
        </div>
        <div
          class="my-4 border border-white border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50 px-5 h-full"
        >
          <div class="text-center">
            <button
              v-if="currentComponent !== ''"
              class="p-2"
              @click="$store.commit('element/changeComponent', '')"
            >
              <i class="fas fa-long-arrow-alt-left text-white text-2xl"></i>
            </button>
          </div>
          <nav
            v-if="currentComponent === ''"
            class="flex flex-col px-4 pb-4 mt-5 w-full"
          >
            <div
              v-for="(btn, i) in component"
              :key="i"
              class="flex flex-col justify-center items-center my-5"
            >
              <button
                class="text-white font-display border-white py-3 w-3/5 rounded-sm border"
                @click="selectComponent(btn)"
              >
                {{ btn }}
              </button>
            </div>
          </nav>
          <section>
            <keep-alive>
              <Component :is="currentComponent" />
            </keep-alive>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import InnerSideNavList from '../Inner-side-nav/list'
import TextComponent from '~/components/Inner-side-nav/input'
import ImageComponent from '~/components/Inner-side-nav/image'
import QuillFormater from '~/components/Edit/components/text'
import ImageFormater from '~/components/Edit/components/image-edit'
export default {
  components: {
    // InnerSideNavList,
    TextComponent,
    ImageComponent,
    QuillFormater,
    ImageFormater,
  },
  data() {
    return {
      component: ['Button', 'Text', 'Image'],
    }
  },
  computed: {
    currentComponent() {
      return this.$store.state.element.currentComponent
    },
  },
  methods: {
    selectComponent(value) {
      switch (value) {
        case 'Text':
          // this.currentComponent = 'TextComponent'
          this.$store.commit('element/changeComponent', 'TextComponent')
          break
        case 'Image':
          // this.currentComponent = 'ImageComponent'
          this.$store.commit('element/changeComponent', 'ImageComponent')

          break
        case 'Button':
          // this.currentComponent = 'QuillFormater'
          //
          break
        default:
          this.currentComponent = ''
          break
      }
    },
  },
}
</script>
<style scoped>
.__bg {
  background: rgba(13, 17, 43, var(--bg-opacity));
}
</style>
