<style scoped>
  .card-box{
    cursor: pointer;
  }
  .card{
    margin-bottom: 15px;
  }
  .content {
    text-align: center;
  }
  .logo {
    width: 160px;
    height: 160px;
  }
</style>

<template>
  <Row :gutter="16">
    <ICol v-for="item in list" span="6" :key="item">
      <div class="card-box" @click="onClick({ name: item })">
        <Card :borered="false" class="card">
          <p slot="title">{{ item }}</p>
          <div class="content">
            <img src="../../assets/logo.png" class="logo" />
          </div>
        </Card>
      </div>
    </ICol>
  </Row>
</template>

<script>
  export default {
    props: ['list', 'onClick'],
    async mounted() {
      const testData = await this.$http.get('/qiniu/bucket');
      console.warn(testData);
    }
  }
</script>