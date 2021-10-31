<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  data: () => {
    console.log("vue.js is installed");
    return {
      message: 'this is vue.js components',
    }
  },
};
</script>

<style scoped>
  p{
    color: green;
  }
</style>