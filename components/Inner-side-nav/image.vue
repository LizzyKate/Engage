<template>
  <section>
    <h1 class="text-3xl text-center text-white my-3">Image</h1>
    <input
      ref="file"
      type="file"
      accept="*/image"
      class="hidden"
      @change="addingImage"
    />
    <button
      class="bg-blue-300 rounded px-5 py-2 w-full text-white text-xl my-3"
      @click="addImage"
    >
      Upload
    </button>
    <draggable
      v-model="images"
      :group="{ name: 'people', pull: 'clone', put: false }"
      class="flex flex-wrap h-full"
    >
      <img
        v-for="(image, i) in images"
        :key="i"
        :src="image.img"
        :alt="image.img"
        class="p-2"
      />
    </draggable>
  </section>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      images: [
        {
          img:
            'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
          type: 'ImageComponent',
          id: 1,
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098_960_720.jpg',
          type: 'ImageComponent',
          id: 2,
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758_960_720.jpg',
          type: 'ImageComponent',
          id: 3,
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
          type: 'ImageComponent',
          id: 4,
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098_960_720.jpg',
          type: 'ImageComponent',
          id: 5,
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758_960_720.jpg',
          type: 'ImageComponent',
          id: 6,
        },
      ],
    }
  },
  methods: {
    addImage() {
      this.$refs.file.click()
    },
    addingImage(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
  },
}
</script>
