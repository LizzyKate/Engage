<template>
  <div
    :style="{ width: properties.textWidth + '%' }"
    class="flex justify-between items-center"
  >
    <!-- props passed inside div tag as props.value to display text being dragged from input.vue file in inner-side-nav -->
    <div
      class="cursor-pointer"
      @click="textFormatter"
      v-html="properties.value || props.value"
    ></div>
    <div>
      <button class="focus:outline-none" @click="deleteText">
        <i class="fas fa-trash text-red-600 text-base"></i>
      </button>
    </div>
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
  methods: {
    // delete dragged text with props index passed from edit.vue file
    deleteText() {
      this.$store.commit('element/deleteElement', this.index)
    },
    textFormatter() {
      this.$store.commit('element/changeComponent', 'QuillFormater')
      this.$store.commit('element/editCurrentComponent', this.index)
    },
  },
}
</script>
<style scoped></style>
