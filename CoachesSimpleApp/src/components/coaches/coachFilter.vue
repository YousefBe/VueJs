<template>
  <base-card>
    <h2>Find you coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="Backend" checked @change="setFilter" />
      <label for="Backend">backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        forntend: true,
        backend: true,
        career: true
      }
    };
  },
  emits: ['change-filters'],
  methods: {
    setFilter(eve) {
      const inputId = eve.target.id;
      const isActive = eve.target.checked;
      const updateFilters = {
        //   gdeda d
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updateFilters;
      this.$emit('change-filters', updateFilters);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
