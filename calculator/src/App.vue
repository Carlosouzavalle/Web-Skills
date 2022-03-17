<template>
  <div id="app">
    <h1>Calculator</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from '../src/main/Calculator.vue'


export default {
  components: { Calculator}
}
</script>

<style>

  @font-face {
    font-family: 'RobotoMono';
    src: url("./fonts/RobotoMono-Thin.ttf");
  }

  * {
      font-family: "RobotoMono", monospace;
  }

  body {
    margin: 0;
  }

  #app{
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* width: 1928px; */
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
  }

</style>
