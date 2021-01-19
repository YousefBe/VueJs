<template>
  <coach-filter @change-filters="setFilters"></coach-filter>
  <div>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register"
          >Register a new Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <single-coach
          v-for="coach in filterdCoaches"
          :key="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :id="coach.id"
          :rate="coach.hourlyRate"
        >
          {{ coach.firstName }}
        </single-coach>
      </ul>
      <h2 v-else>No Coaches</h2>
    </base-card>
  </div>
</template>

<script>
import CoachFilter from '../../components/coaches/coachFilter.vue';
import singleCoach from '../../components/coaches/singleCoach.vue';

export default {
  components: { singleCoach, CoachFilter },
  data() {
    return {
      activeFilters: { frontend: true, backend: true, career: true }
    };
  },
  methods: {
    setFilters(updatedfilters) {
      this.activeFilters = updatedfilters;
    }
  },
  computed: {
    filterdCoaches() {
      const coaches = this.$store.getters['coachesModule/coaches'];
      return coaches.filter(coach => {
        // ana hb3tlk el 7aga lw 3andk hatly el dg3 da
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }

        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coachesModule/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coachesModule/isCoach'];
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
