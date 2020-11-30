<template>
  <div>
    <div class="flex justify-between items-center px-8 pt-20 xl:pt-8">
      <button
        class="bg-red-500 hover:bg-red-600 font-bold text-white w-1/6 p-3 rounded-lg lg:block md:block hidden"
        @click="$router.push('/')"
      >
        Home
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-600 font-bold text-white w-1/6 p-3 rounded-lg lg:block md:block hidden"
        @click="$router.push({ path: `/Edit/${$route.params.preview}` })"
      >
        Edit
      </button>
    </div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="xl:w-3/4 w-full p-4 mx-auto">
          <div class="bg-gray-100 p-6 rounded-lg">
            <!-- <div class="h-64 rounded w-full bg-secondary mb-6"></div> -->
            <div
              class="tracking-widest text-base font-medium title-font flex flex-wrap"
            >
              <component
                :is="comp.type"
                v-for="(comp, i) in elements"
                :key="i"
                class="w-1/3 p-1 border-blue-600 focus:border-blue-600"
                :props="comp"
                :index="i"
              />
              <!-- <h1 class="text-3xl text-center">Hello</h1> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ImageComponent from '../Edit/components/image-preview'
import TextComponent from '../Edit/components/text-preview'

export default {
  components: {
    ImageComponent,
    TextComponent,
  },
  data() {
    return {}
  },
  computed: {
    elements() {
      return this.$store.state.element.elements
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
