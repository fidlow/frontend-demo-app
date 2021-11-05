<template>
  <div class="container">
    <div class="row my-2">
      <div class="col">Счётчик: {{ counter }}</div>
    </div>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="stateHandle('increment')"
        >
          +
        </button>
        <button
          class="btn btn-primary me-2"
          type="button"
          @click="stateHandle('decrement')"
        >
          -
        </button>
        <button
          class="btn btn-danger"
          type="button"
          @click="reset()"
        >
          сброс
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Main",
  setup() {
    const store = useStore();
    return {
      counter: computed(() => store.getters.counter),
      stateHandle: function (type) {
        store.commit(type);
      },
      reset: function () {
        store.dispatch('reset');
      },
    };
  },
};
</script>

<style scoped>
</style>
