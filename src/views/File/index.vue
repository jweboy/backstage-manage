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
    <BucketList :list="bucket" :on-click="onClick" />
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
  computed: mapGetters(['bucket']),
  mounted() {
    // 获取镜像空间列表
    this.asyncFetchBucketList()
  }
};
</script>
