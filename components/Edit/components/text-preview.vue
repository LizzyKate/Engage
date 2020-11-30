<template>
  <div
    :style="{ width: properties.textWidth + '%' }"
    class="flex justify-center items-center"
  >
    <div v-html="properties.value || props.value"></div>
  </div>
</template>
<script>
export default {
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
<style scoped></style>
