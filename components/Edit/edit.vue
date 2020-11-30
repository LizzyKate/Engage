<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-20 mx-auto">
      <div class="xl:w-3/4 w-full p-4 mx-auto">
        <div class="bg-gray-100 p-6 rounded-lg">
          {{ index }}
          <div
            class="tracking-widest text-indigo-500 text-xs font-medium title-font flex flex-wrap"
          >
            <draggable
              v-model="elements"
              group="people"
              class="flex flex-wrap w-full border-black border-2 border-dashed -mx-3"
            >
              <component
                :is="comp.type"
                v-for="(comp, i) in elements"
                :key="i"
                class="w-1/3 border border-dotted border-blue-600 focus:border-blue-600"
                :props="comp"
                :index="i"
                tabindex="0"
              />
              <div
                v-if="!elements.length"
                slot="header"
                class="text-2xl font-bold text-center opacity-75 flex items-center justify-center w-full __canva"
                role="group"
              >
                Drag and Drop Elements Here
              </div>
            </draggable>
          </div>
          <div class="text-center">
            <button
              class="bg-teal-500 hover:bg-teal-600 font-bold text-white lg:w-1/5 w-full p-3 rounded-lg mt-8"
              @click="$router.push({ path: `/Preview/${$route.params.id}` })"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import draggable from 'vuedraggable'
import ImageComponent from './components/image'
import TextComponent from './components/dragText'

export default {
  components: {
    ImageComponent,
    draggable,
    TextComponent,
  },
  data() {
    return {
      index: null,
    }
  },
  computed: {
    elements: {
      get() {
        return this.$store.state.element.elements || []
      },
      set(value) {
        this.$store.commit('element/updateList', value)
      },
    },
  },
  methods: {},
}
</script>
<style>
.sortable-chosen.sortable-ghost {
  width: 30% !important;
}
.place {
  border: 1px solid #d8d8d8;
}
.__canva {
  min-height: 300px;
}
.__color {
  background: #76797b;
}
</style>
