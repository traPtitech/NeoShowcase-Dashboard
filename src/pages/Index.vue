<template>
  <routes />
  <div>Index Page</div>
  <img alt="Vue logo" :src="logoSrc" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Routes from '/@/components/Routes.vue'
import logoSrc from '/@/assets/logo.png'

export default defineComponent({
  name: 'Index',
  components: {
    Routes
  },
  setup() {
    return { logoSrc }
  }
})
</script>
