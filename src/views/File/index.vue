<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
<template>
  <!--
    <div class="bucket">
        <AsyncTable :reqOpts="reqOpts" :columns="tableColumns" />
    </div>
  -->
  <div>
    <header class="header">
      <h2>存储空间列表</h2>
    </header>
    <BucketList :list="list" :on-click="onClick" />
  </div>
</template>
<script>
// import axios from 'axios'
import { LeftMenu } from "@/components";
import BucketList from './BucketList';
import FileList from './FileList';
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: { LeftMenu, BucketList, FileList },
  methods: {
    ...mapActions(["asyncFetchBucketList"]),
    ...mapMutations(["onClick"])
  },
  // TODO: mapState和mapGetters的区别
  // ...mapGetters(["getData"]),
  computed: mapState({
    list: state => state.bucket.data,
  }),
  mounted() {
    // 获取镜像空间列表
    this.asyncFetchBucketList()

    console.log(this.$route);
  }
};
</script>
