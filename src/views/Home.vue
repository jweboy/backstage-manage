<style scoped>
  .main{
    padding: 0 24px 24px;
  }
</style>
<template>
  <div class="home">
    <Layout>
      <Header />
    </Layout>
    <Layout>
      <Sider>
        <LeftMenu />
      </Sider>
      <layout class="main">
        <AMMain>
          <router-view />
        </AMMain>
      </layout>
    </Layout>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Header, LeftMenu } from '@/containers';
  import { AMMain } from '@/components';

  @Component({
    components: { Header, LeftMenu, AMMain },
  })
  export default class Home extends Vue {
    // public breadcrumbData = []
  }
</script>
