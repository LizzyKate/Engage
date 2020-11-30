<template>
  <div>
    <!-- <p>{{ content.replace('') }}</p> -->
    <div id="editor-container" class="w-full p-2"></div>
    <div class="w-full mt-4">
      <p class="flex justify-between text-white text-xs font-light mb-2">
        <span>Container Width</span> <span>{{ textWidth }}</span>
      </p>
      <input
        id=""
        v-model="textWidth"
        type="range"
        name=""
        min="0"
        max="100"
        step="1"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import Quill from 'quill'

export default {
  data() {
    return {
      editor: {},
      content: '',
      text: {},
      textWidth: 50,
    }
  },
  computed: {
    changedIndex() {
      return this.$store.state.element.currentIndex
    },
  },
  watch: {
    content() {
      this.$store.commit('element/EditElement', {
        value: this.content,
        textWidth: this.textWidth,
      })
      console.log('element', this.content)
    },
    textWidth() {
      this.$store.commit('element/EditElement', {
        textWidth: this.textWidth,
      })
    },

    changedIndex: {
      handler() {
        this.editor.clipboard.dangerouslyPasteHTML(
          this.$store.state.element.elements[this.changedIndex]?.value ||
            'hello'
        )
        this.textWidth =
          this.$store.state.element.elements[this.changedIndex]?.textWidth || 50
        console.log(this.editor)
      },
    },
  },
  mounted() {
    /* eslint-disable dot-notation */
    this.editor = new Quill('#editor-container', {
      modules: {
        toolbar: [
          ['bold'],
          ['italic'],
          ['underline'],
          ['strike']['blockquote'], // toggled buttons
          [{ list: 'ordered' }],
          [{ list: 'bullet' }],
          [{ script: 'sub' }],
          [{ script: 'super' }], // superscript/subscript
          [{ indent: '-1' }],
          [{ indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction
          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }],
          [{ background: [] }], // dropdown with defaults from theme
          //   [{ font: fontNames }],
          [{ align: [] }],
        ],
      },
      placeholder: 'add your content',
      theme: 'snow', // or 'bubble'
    })

    // this.seteditorContents()
    const Delta = Quill.import('delta')
    // eslint-disable-next-line no-unused-vars
    const change = new Delta()
    const text = this.editor.clipboard.convert(`${this.content}`)
    this.editor.setContents(text, 'silent')
    this.editor.on('text-change', (delta) => {
      this.content = this.editor.container.innerHTML.replace(
        'contenteditable="true"',
        ''
      )
    })

    this.text.content = this.content
  },
}
</script>
<style>
.ql-editor {
  padding: 0 !important;
}
.ql-toolbar.ql-snow {
  /* margin: 5px; */
  padding: 0 !important;
  border: 1px solid #465783 !important;
  /* background: #2f3352; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ql-toolbar.ql-snow > span {
  flex-grow: 1;
  border: 1px solid #465783 !important;
  margin: 5px !important;
}

.ql-container {
  min-height: 350px;
  height: auto !important;
  background: white;
  border: 1px solid #465783;
}

.editor-container {
  padding: 0 !important;
}
.ql-editor.ql-blank {
  height: 100%;
}
</style>
