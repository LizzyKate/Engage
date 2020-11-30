<template>
  <div>
    <h1 class="text-3xl text-center text-white font-bold my-5">
      Input Component
    </h1>
    <div class="flex flex-wrap item-between">
      <draggable
        v-model="allTexts"
        :group="{ name: 'people', pull: 'clone', put: false }"
        class="flex flex-wrap h-full"
      >
        <div
          v-for="(text, i) in allTexts"
          :key="i"
          class="text-white m-3 text-xl"
          :class="text.fontName"
        >
          {{ text.value }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      allTexts: [
        {
          fontName: 'font-sans',
          value: 'hello Maria',
          type: 'TextComponent',
          textWidth: 50,
          id: 1,
        },
        {
          fontName: 'font-serif',
          value: 'hello Maria',
          type: 'TextComponent',
          textWidth: 50,
          id: 2,
        },
        {
          fontName: 'font-mono',
          value: 'hello Maria',
          type: 'TextComponent',
          textWidth: 50,
          id: 3,
        },
        {
          fontName: 'font-sans',
          value: 'hello Maria',
          type: 'TextComponent',
          textWidth: 50,
          id: 4,
        },
        {
          fontName: 'font-mono',
          value: 'hello Maria',
          type: 'TextComponent',
          textWidth: 50,
          id: 5,
        },
      ],
    }
  },
}
</script>
