<template>
  <div>
    <div class="relative">
      <div class="bg-gray-200 w-screen px-4">
        <div class="p-4 text-default" @click="show()">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50"
      ></div>

      <div v-show="side" class="fixed w-64 top-0 z-30">
        <DesktopNav />
      </div>
    </div>
  </div>
</template>
<script>
import DesktopNav from './DesktopNav'
export default {
  components: {
    DesktopNav,
  },
  data() {
    return {}
  },
  computed: {
    side() {
      return this.$store.state.element.side
    },
  },
  methods: {
    show() {
      this.$store.commit('element/showNav', true)
    },
  },
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
