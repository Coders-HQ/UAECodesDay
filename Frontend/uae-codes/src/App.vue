<template>
  <div id="app">
    <MainContent />
  </div>
</template>

<script>
import MainContent from "./components/MainContent.vue";

export default {
  name: "App",
  components: {
    MainContent,
  },
};
</script>

<style>
* {
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: blueviolet;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
