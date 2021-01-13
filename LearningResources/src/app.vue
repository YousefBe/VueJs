<template>
  <the-header title="LearnSource"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/learnResources/TheResources.vue';
export default {
  components: { TheHeader, TheResources }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
