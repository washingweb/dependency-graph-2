<template>
  <div class="container">
    <div class="canvas">
      <div>
        drawing
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'design',
};
</script>

<style scoped>

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background: #01001d;
}

.canvas {
  flex: 1;
  display: flex;
}

.canvas > div {
  margin: auto;
  font-size: 100px;
}

</style>
