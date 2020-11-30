<template>
  <div>
    <Index />
  </div>
</template>
<script>
import Index from '~/components/Preview/index'
export default {
  components: {
    Index,
  },
  middleware({ store, route }) {
    const Items = localStorage.getItem(route.params.preview)
    store.commit('element/setElements', JSON.parse(Items))
  },
}
</script>
<style scoped></style>
