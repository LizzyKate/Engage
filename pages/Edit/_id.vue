<template>
  <div class="h-screen overflow-y-hidden">
    <Index />
  </div>
</template>
<script>
import Index from '~/components/Edit/index'
export default {
  components: {
    Index,
  },
  mounted() {},
  middleware(context) {
    const Items = localStorage.getItem(context.route.params.id)
    context.store.commit('element/setElements', JSON.parse(Items))
  },
}
</script>
<style scoped></style>
