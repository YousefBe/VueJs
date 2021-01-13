<template>
  <ul>
    <learning-resources
      v-for="item in resources"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :description="item.description"
      :link="item.link"
    ></learning-resources>
  </ul>
</template>

<script>
import learningResources from './learningResources.vue';

export default {
  components: {
    learningResources
  },
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
