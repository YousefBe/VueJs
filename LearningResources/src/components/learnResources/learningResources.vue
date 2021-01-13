<template>
  <card-component>
    <li>
      <header>
        <h3>{{ title }}</h3>
        <buttons mode="flat" @click="deleteResource(id)">Ddelete</buttons>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">Go there</a>
      </nav>
    </li>
  </card-component>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'id'],
  inject: ['deleteResource']
};
</script>

<style>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
