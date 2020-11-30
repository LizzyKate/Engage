<template>
  <section>
    <section class="mt-4">
      {{ changedIndex }} {{ container }}
      <p class="font-light text-white text-xs">Alignment</p>
      <div class="flex mt-2">
        <button
          class="p-1 border border-blue-800 border-3 rounded-lg mr-3"
          @click="space('left')"
        >
          <i class="fas fa-align-left text-white"></i>
        </button>
        <button
          class="p-1 mr-3 border border-blue-800 border-3 rounded-lg"
          @click="space('center')"
        >
          <i class="fas fa-align-center text-white"></i>
        </button>
        <button
          class="p-1 border border-blue-800 border-3 rounded-lg mr-3 bg-editorsBlue"
          @click="space('right')"
        >
          <i class="fas fa-align-right text-white"></i>
        </button>
      </div>
    </section>
    <section class="mt-4">
      <p class="flex justify-between text-white text-xs font-light">
        <span>Opacity</span> <span>1</span>
      </p>
      <input
        id=""
        v-model="opacity"
        type="range"
        name=""
        min="0"
        max="1"
        step="0.1"
        class="w-full"
      />
    </section>
    <div class="w-full mt-4">
      <p class="flex justify-between text-white text-xs font-light mb-2">
        <span>Container Width</span> <span>50</span>
      </p>
      <input
        id=""
        v-model="container"
        type="range"
        name=""
        min="0"
        max="100"
        step="1"
        class="w-full"
      />
    </div>
    <div class="w-full mt-4">
      <p class="flex justify-between text-white text-xs font-light mb-2">
        <span>Image Width</span> <span>100</span>
      </p>
      <input
        id=""
        v-model="imageWidth"
        type="range"
        name=""
        min="0"
        max="100"
        step="1"
        class="w-full"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageWidth: 100,
      opacity: 1,
      container: 50,
      align: 'center',
    }
  },
  computed: {
    changedIndex() {
      return this.$store.state.element.currentIndex
    },
  },
  watch: {
    $data: {
      deep: true,
      handler() {
        this.$store.commit('element/EditElement', {
          container: this.container,
          opacity: this.opacity,
          imageWidth: this.imageWidth,
          align: this.align,
        })
      },
    },
    changedIndex: {
      immediate: true,
      handler() {
        this.container =
          this.$store.state.element.elements[this.changedIndex]?.container || 50
        this.opacity =
          this.$store.state.element.elements[this.changedIndex]?.opacity || 1
        this.imageWidth =
          this.$store.state.element.elements[this.changedIndex]?.imageWidth ||
          100
        this.align =
          this.$store.state.element.elements[this.changedIndex]?.align ||
          'center'
      },
    },
  },
  methods: {
    space(position) {
      this.align = position
    },
  },
}
</script>

<style></style>
