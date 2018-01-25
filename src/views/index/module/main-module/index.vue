<template>
  <div>{{ message }}</div>
</template>

<script>
  import Service from './service';

  export default {
    components: {
    },
    data() {
      return {
        message: ''
      }
    },
    watch: {
    },
    mounted() {
      this.serviceGet({})
    },
    methods: {
      serviceGet(val) {
        Service.get(val).then((data) => {
          this.message = data.moduleData;
        });
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
