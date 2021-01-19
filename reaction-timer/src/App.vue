<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <block v-if="isPlaying" :delay="delay" @end="GameOver" />
  <result v-if="score" :result="score"> </result>
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Results.vue";
export default {
  components: {
    Block,
    Result,
  },
  name: "App",

  data() {
    return {
      isPlaying: false,
      score: null,
      delay: null,
    };
  },
  methods: {
    start() {
      this.score = null;
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
    },
    GameOver(theReactionTime) {
      this.score = theReactionTime;
      this.isPlaying = false;
      // console.log(this.score);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
