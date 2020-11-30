<template>
  <section
    class="relative"
    :style="{ width: properties.container + '%', textAlign: properties.align }"
  >
    <!-- props passed inside image tag as props.image to display image being dragged from image.vue file in inner-side-nav folder -->
    <img
      :src="props.img"
      alt=""
      class="object-contain resizable-content w-full h-full inline-block cursor-pointer"
      :style="{
        opacity: properties.opacity,
        width: properties.imageWidth + '%',
      }"
      @click="imageFormatter"
    />
    <div class="absolute bottom-0">
      <button class="focus:outline-none" @click="deleteImage">
        <i class="fas fa-trash text-red-600 text-base"></i>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    props: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      properties: {},
    }
  },
  watch: {
    '$store.state.element.elements': {
      deep: true,
      immediate: true,
      handler() {
        this.properties = this.$store.state.element.elements[this.index]
      },
    },
  },
  methods: {
    // delete dragged images with props index passed from edit.vue file
    deleteImage() {
      this.$store.commit('element/deleteElement', this.index)
    },
    imageFormatter() {
      this.$store.commit('element/changeComponent', 'ImageFormater')
      this.$store.commit('element/editCurrentComponent', this.index)
    },
  },
}
</script>

<style scoped>
.__delete {
  top: 8px;
  padding-right: 7px;
}
</style>
