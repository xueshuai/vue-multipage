<template>
  <div>
    This is another page for test.

    <mainModule></mainModule>
  </div>
</template>

<script>
  import mainModule from './module/main-module/index.vue';

  export default {
    name: 'testPage',
    components: {
      mainModule
    },
    data() {
      return {}
    },
    methods: {}
  }

</script>
