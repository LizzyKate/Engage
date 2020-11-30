<template>
  <div>
    <div class="flex flex-col">
      <div class="lg:flex inline-block justify-between items-center md:p-8 p-4">
        <div class="relative flex-grow lg:text-left text-center">
          <input
            v-model="newCampaign"
            type="text"
            placeholder="Search"
            class="p-3 rounded-full bg-default placeholder-gray-400 text-gray-400 font-sm md:w-64 w-full pl-5 focus:outline-none"
          />
        </div>
        <div class="text-center lg:mt-0 md:mt-8 mt-0">
          <button
            class="text-base font-display font-semibold text-default focus:outline-none md:mt-0 mt-8"
            @click="open()"
          >
            +
          </button>
        </div>
      </div>
      <section class="text-gray-700 body-font bg-gray-200">
        <div
          class="container md:px-5 lg:px-5 px-5 lg:py-24 mx-auto bg-gray-200"
        >
          <div class="flex flex-wrap -m-4 bg-gray-200">
            <div
              v-for="(design, i) in campaigns"
              :key="design"
              class="md:p-4 p-8 md:w-1/2 lg:w-1/3 w-full lg:mt-0 mt-8"
            >
              <div class="border-2 border-gray-500 rounded-lg overflow-hidden">
                <div
                  class="__height w-full m-auto flex justify-center items-center bg-secondary"
                >
                  <b class="text-3xl text-white">{{ design }}</b>
                </div>
                <div class="p-3">
                  <div class="flex items-center overflow-x-scroll __hide">
                    <button
                      class="bg-teal-500 hover:bg-teal-600 font-bold text-white w-2/3 p-3 rounded-lg focus:outline-none"
                      @click="$router.push({ path: `/Edit/${design}` })"
                    >
                      Edit
                    </button>
                    <button
                      class="ml-3 bg-blue-500 hover:bg-blue-600 font-bold text-white w-2/3 p-3 rounded-lg focus:outline-none"
                      @click="$router.push({ path: `/Preview/${design}` })"
                    >
                      Preview
                    </button>
                    <button
                      class="ml-3 bg-red-500 hover:bg-red-600 font-bold text-white w-2/3 p-3 rounded-lg focus:outline-none"
                      @click="removeCampaign(i)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- modal -->
    <div
      v-show="modal"
      class="fixed top-0 right-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-75 z-20"
      @click="close"
    >
      <div class="flex flex-col justify-center w-full items-center">
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
            <div class="w-full flex flex-col items-center">
              <div class="w-3/4 flex flex-col">
                <input
                  v-model="newCampaign"
                  placeholder="Add new campaign"
                  class="p-2 text-gray-500 border-gray border rounded-xl resize-none mt-4 focus:outline-none"
                />
                <button
                  class="py-1 my-8 text-lg bg-red-700 rounded-lg text-white focus:outline-none"
                  :disabled="newCampaign.length === 0"
                  :class="
                    newCampaign.length === 0
                      ? 'bg-opacity-50'
                      : 'bg-opacity-100'
                  "
                  @click="addCampaign()"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      campaigns: [],
      newCampaign: '',
      modal: false,
    }
  },
  mounted() {
    this.campaigns = this.allStorage()
  },
  methods: {
    addCampaign() {
      localStorage.setItem(this.newCampaign, '[]')
      this.$router.push('/edit/' + this.newCampaign)
    },
    removeCampaign(i) {
      localStorage.removeItem(this.campaigns[i])
      this.campaigns.splice(i, 1)
    },
    open() {
      this.modal = true
    },
    close(e) {
      if (e.target.className.includes('fixed')) {
        this.modal = false
      }
    },
    allStorage() {
      const keys = Object.keys(localStorage)
      return [...keys]
    },
  },
}
</script>
<style scoped>
.__hide::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.__height {
  min-height: 10rem;
}
</style>
