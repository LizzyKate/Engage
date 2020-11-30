<template>
  <div>
    <div class="relative">
      <div
        class="flex flex-row bg-primary justify-between items-center w-screen px-4 fixed"
      >
        <div class="p-4 text-white">
          <n-link to="/">
            <p class="text-base font-light font-display">Editor</p>
          </n-link>
        </div>
        <div class="p-4 text-white">
          <p class="text-base font-light font-display">Button</p>
        </div>
        <div class="p-4 text-white">
          <p class="text-base font-light font-display">Image</p>
        </div>
        <div class="p-4 text-white">
          <p class="text-base font-light font-display">Text</p>
        </div>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
.second {
  left: -48px;
}
.third {
  left: -130px;
}
.__profile {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.icon {
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.__profiling {
  width: 50px;
  height: 35px;
  cursor: pointer;
}
.add {
  width: 18rem;
  height: 500px;
  overflow-y: scroll;
}
.adding {
  width: 18rem;
}
.boost {
  font-size: 1.5rem;
  margin-top: 1.25rem;
}
.inc h6 {
  font-size: 1rem;
}
@media screen and (max-width: 320px) {
  .add {
    width: 12rem;
  }
  .adding {
    width: 16rem;
  }
  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .boost {
    font-size: 1rem;
    margin-top: 0.75rem;
  }
  .inc h6 {
    font-size: 0.75rem;
  }
}
@media screen and (max-width: 290px) {
  .adding {
    width: 14rem;
  }
  .boost {
    font-size: 1rem;
    margin-top: 0.75rem;
  }
  .inc h6 {
    font-size: 0.75rem;
  }
}
@media screen and (min-width: 450px) {
  .add,
  .adding {
    width: 24rem !important;
  }
  .__profiling {
    width: 70px;
    height: 65px;
  }
  .spec {
    width: 75%;
  }
}
</style>
