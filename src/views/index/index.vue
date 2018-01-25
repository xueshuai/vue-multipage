<template>
  <div>
    This is the index page.

    <mainModule></mainModule>
  </div>
</template>

<script>
  import mainModule from './module/main-module/index.vue';

  export default {
    name:'indexRoot',
    components: {
      mainModule
    },
    data() {
      return {}
    },
    methods: {}
  }

</script>
