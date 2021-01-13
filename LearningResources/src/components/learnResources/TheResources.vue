<template>
  <card-component>
    <buttons
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesActive"
    >
      Stored resources
    </buttons>
    <buttons
      @click="setSelectedTab('add-resources')"
      :mode="addResourcesActive"
    >
      Add resource
    </buttons>
  </card-component>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import storedResources from './storedResources.vue';
import addResources from './addResource.vue';

export default {
  components: {
    storedResources,
    addResources
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'Vue Guide',
          title: 'Offical Guide',
          description: 'the offical vue.js docs',
          link: 'https://v3.vuejs.org/guide/introduction.html'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn how to search helps you solving problems',
          link: 'https://google.com'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      createResource: this.createNewResource,
      deleteResource: this.deleteResource
    };
  },
  methods: {
    setSelectedTab(Tab) {
      this.selectedTab = Tab;
      console.log(this.selectedTab);
    },
    createNewResource(title, discription, link) {
      const newResource = { title, discription, link };
      this.storedResources.push(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resId) {
      const index = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(index, 1);
    }
  },
  computed: {
    addResourcesActive() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    },
    storedResourcesActive() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    }
  }
};
</script>
