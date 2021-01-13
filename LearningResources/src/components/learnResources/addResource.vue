<template>
  <base-modal v-if="inputInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>at least one input is invalid</p>
    </template>

    <template #actions>
      <buttons @click="confirmError">Okay</buttons>
    </template>
  </base-modal>
  <card-component>
    <form @submit.prevent="SubmitData">
      <div class="form-control">
        <label for="title">title</label>
        <input id="title" type="text" name="title" ref="title" />
      </div>
      <div class="form-control">
        <label for="Description">Description</label>
        <textarea
          name="Description"
          id="Description"
          cols="30"
          rows="10"
          ref="descriptionTextArea"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="Link">Link</label>
        <input id="Link" name="link" type="url" ref="link" />
      </div>
      <div class="">
        <buttons type="submit"> Add Resource </buttons>
      </div>
    </form>
  </card-component>
</template>

<script>
import Buttons from '../UI/Buttons.vue';
export default {
  components: { Buttons },
  data() {
    return {
      inputInvalid: false
    };
  },
  inject: ['createResource'],
  methods: {
    SubmitData() {
      console.log('as');
      const titleInput = this.$refs.title.value;
      const descriptionInput = this.$refs.descriptionTextArea.value;
      const linkInput = this.$refs.link.value;

      if (
        titleInput.trim() === '' ||
        descriptionInput.trim() === '' ||
        linkInput.trim() === ''
      ) {
        this.inputInvalid = true;
        return;
      } else {
        this.createResource(titleInput, descriptionInput, linkInput);
      }
    },
    confirmError() {
      this.inputInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
