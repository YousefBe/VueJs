<template>
  <p>{{ result }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["result"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.result < 250) {
      this.rank = " FAST AF BOY ";
    } else if (this.result < 400) {
      this.rank = "good enough";
    } else {
      this.rank = "slow";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
