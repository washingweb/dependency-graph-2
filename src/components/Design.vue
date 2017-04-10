<template>
  <div class="container">
    <div class="canvas" ref="canvas">
      <div>
        drawing: {{ message }}
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { dotToSvg } from '../layout';

export default {
  name: 'design',
  mounted() {
    const dotString = `
digraph G {
  subgraph cluster_0 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    a0 -> a1 -> a2 -> a3;
    label = "process #1";
  }

  subgraph cluster_1 {
    node [style=filled];
    b0 -> b1 -> b2 -> b3;
    label = "process #2";
    color=blue
  }
  start -> a0;
  start -> b0;
  a1 -> b3;
  b2 -> a3;
  a3 -> a0;
  a3 -> end;
  b3 -> end;

  start [shape=Mdiamond];
  end [shape=Msquare];
}
`;

    const doc = dotToSvg(dotString);

    const graph = this.$refs.canvas;

    while (graph.hasChildNodes()) {
      graph.removeChild(graph.lastChild);
    }

    graph.appendChild(doc.documentElement);
  },
  computed: {
    ...mapGetters([
      'message',
    ]),
  },
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
