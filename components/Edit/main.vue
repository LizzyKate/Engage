<template>
  <div>
    <div class="flex flex-col">
      <div class="flex justify-between items-center px-8 pt-20 xl:pt-8">
        <button
          class="bg-red-500 hover:bg-red-600 font-bold text-white w-1/6 p-3 rounded-lg lg:block md:block hidden"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-600 font-bold text-white w-1/6 p-3 rounded-lg lg:block md:block hidden"
          @click="save"
        >
          Save
        </button>
      </div>
      <Edit />
    </div>
  </div>
</template>
<script>
import Edit from './edit'
export default {
  components: {
    Edit,
  },
  methods: {
    save() {
      const id = this.$route.params.id
      const state = this.$store.state.element.elements
      localStorage.setItem(id, JSON.stringify(state))
      alert('saved')
    },
  },
}
</script>
<style scoped></style>
