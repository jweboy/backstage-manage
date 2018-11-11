<style scoped>
  .header{
    overflow: hidden;
    content: '.';
    clear: both;
  }
  .upload{
    float: right;
  }
  .back{
    float: left;
  }
</style>

<template>
  <div class="file-list">
    <header class="header">
      <Upload class="upload" action="http://118.24.155.105:4000/v1/qiniu/file/erer">
        <Button icon="ios-cloud-upload-outline" type="primary">上传文件</Button>
      </Upload>
      <Button class="back" type="success" @click="goBack(-1)">返回</Button>
    </header>
    <content>
      <span>list</span>
    </content>
  </div>
</template>
<script>
  import { mapMutations, mapState } from "vuex";
  export default {
    methods: {
      ...mapMutations(['goBack']),
    },
    computed: mapState({
      bucket: ({ bucket }) => {
        const { name } = bucket

        return `http://118.24.155.105:4000/v1/qiniu/file/${name}`;
      }
    }),
    mounted() {
      console.log(this.$route, this.bucket);
    }
  }
</script>
