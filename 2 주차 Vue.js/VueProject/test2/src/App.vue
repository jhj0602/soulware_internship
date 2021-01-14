<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button v-on:click="getData">이미지 가져오기</button>
    <img v-bind:src="imageData"/>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      imageData: null,
    };
  },

  methods: {
    getData() {
      console.log("getData");
      axios
        .get(
          'https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format'
        ).then((response) => {
          // this.imageData = Buffer.from(response.data.toString(base64));
           this.imageData = "data:image/png;base64," + response.data;
          // console.log(buffer)
        })
        .catch((ex) => {
          console.error(ex);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
