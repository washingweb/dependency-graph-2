<template>
  <ul>
    <li>
      <router-link
        class="link"
        :to="{ name: 'design' }"
      >
        Design
      </router-link>
    </li>
    <li>
      <router-link
        class="link"
        :to="{ name: 'config' }"
      >
        Config
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  background: #01001d;
}

ul > li {
  display: inline;
  font-size: 30px;
}

.link {
  padding: 15px;
  text-decoration: none;
  color: white;
}

.router-link-active {
  color: black;
  background: grey;
}

</style>
