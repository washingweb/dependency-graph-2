<template>
  <div id="app">
    <Nav />
    <router-view class="content"></router-view>
  </div>
</template>

<script>

import Nav from './components/Nav';

export default {
  name: 'app',
  components: {
    Nav,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0px;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.context {
  flex: 1;
}

</style>
