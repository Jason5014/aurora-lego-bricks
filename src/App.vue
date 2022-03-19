<template>
  <div>
    vue3 template （v.1.0.1)
    <hello msg="Hello world" />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject, onMounted } from "vue";

export default defineComponent({
    name: "App",
    setup() {
      console.log(inject('test'));

      onMounted(() => {
          getCurrentInstance()?.appContext.config.globalProperties.$echo();
      });
    },
});
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
