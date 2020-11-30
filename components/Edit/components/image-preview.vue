<template>
  <section
    class="relative"
    :style="{ width: properties.container + '%', textAlign: properties.align }"
  >
    <img
      :src="props.img"
      alt=""
      class="object-contain resizable-content w-full h-full inline-block"
      :style="{
        opacity: properties.opacity,
        width: properties.imageWidth + '%',
      }"
    />
  </section>
</template>

<script>
// import VueResizable from 'vue-resizable'
export default {
  components: {
    // VueResizable,
  },
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
  methods: {},
}
</script>

<style scoped>
.__delete {
  top: 8px;
  padding-right: 7px;
}
</style>
