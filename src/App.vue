<template>
  <div id="app">
    <example-component/>
  </div>
</template>

<script>
import ExampleComponent from './components/Component';

export default {
  name: 'App',
  components: {
    ExampleComponent,
  },
};
</script>
<style>
@import "./assets/styles/tailwind.postcss";
</style>
