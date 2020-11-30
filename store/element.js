export const state = () => ({
  elements: [],
  currentComponent: '',
  currentIndex: null,
})

export const mutations = {
  setElements(state, payload) {
    state.elements = payload
  },
  deleteElement(state, payload) {
    state.elements.splice(payload, 1)
    state.currentIndex = null
    state.currentComponent = ''
  },
  empty(state, payload) {
    state.elements = []
  },
  updateList(state, payload) {
    state.elements = payload.map((e) => e)
    // return a new array so that stateof elements changes
  },
  changeComponent(state, payload) {
    state.currentComponent = payload
    state.currentIndex = null
  },
  editCurrentComponent(state, payload) {
    state.currentIndex = payload
  },
  EditElement(state, payload) {
    console.log(payload)
    const newState = []
    if (state.currentIndex !== null) {
      state.elements.forEach((e, i) => {
        if (i === state.currentIndex) {
          e = {
            ...e,
            ...payload,
          }
        }
        newState.push(e)
      })
      state.elements = newState
    }
  },
}
