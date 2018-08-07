<template>
  <div class="home">
    <!-- <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Header />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/containers/Header.vue';

@Component({
  components: {
    HelloWorld,
    Header,
  },
})
export default class Home extends Vue {}
</script>
