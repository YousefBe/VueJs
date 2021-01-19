<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Recived</h2>
      </header>

      <ul v-if="hasRequests">
        <single-request
          v-for="request in recivedRequests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.userMessage"
        ></single-request>
      </ul>

      <h3 v-else>
        you have no requests yet
      </h3>
    </base-card>
  </section>
</template>

<script>
import SingleRequest from '../../components/requests/singleRequest.vue';
import baseCard from '../../Globals/baseCard.vue';
export default {
  components: { baseCard, SingleRequest },
  // solving an error ,
  // created() {
  //   console.log(this.$store.getters['requestsModule/allRequests']);
  //   console.log(this.recivedRequests);
  // },
  computed: {
    recivedRequests() {
      return this.$store.getters['requestsModule/allRequests'];
    },
    hasRequests() {
      return this.$store.getters['requestsModule/hasRequests'];
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
