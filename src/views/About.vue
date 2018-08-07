<template>
  <div class="about">
    <h1>This is an about page~~{{ hello }}</h1>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  class About extends Vue {
    @Prop(String) public msg!: string;
    public hello: string = this.msg;
  }
  export default About;
</script>

