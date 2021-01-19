<template>
  <base-card>
    <coach-form @saveData="SaveData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/coachForm.vue';
import BaseCard from '../../Globals/baseCard.vue';
export default {
  components: {
    CoachForm,
    BaseCard
  },
  methods: {
    SaveData(data) {
      this.$store.dispatch('coachesModule/saveCoach', data);
      this.$router.push('/');
    }
  }
};
</script>

<style></style>
