<style scoped>
  .upload{
    float: right;
  }
  .back{
    float: left;
  }
  .layout-header{
    margin-bottom: 20px;
    overflow: hidden;
    content: '.';
    clear: both;
  }
  .card{
    position: relative;
    margin-bottom: 15px;
  }
  .card .title{
    cursor: pointer;
  }
  .card .content{
    text-align: center;
  }
  .card .logo{
      width: 80%;
      height: 80%;
  }
  .card-cover{
    margin-top: 50px;
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .content:hover .card-cover{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card-cover i{
      color: #fff;
      font-size: 30px;
      cursor: pointer;
      margin: 0 2px;
  }
</style>

<template>
  <div class="file-list">
    <header class="layout-header">
      <!-- 不显示默认上传列表，文件必须是图片类型，文件大小不超过2M -->
      <Upload 
        class="upload" 
        :action="'http://118.24.155.105:4000/v1/qiniu/file/' + name"
        :before-upload="handleBeforeUpload"
        :show-upload-list="false"
        :format="['jpg', 'jpeg', 'png', 'gif']"
        :max-size="2048"
        :on-exceeded-size="handleMaxSize"
        :on-format-error="handleFormatError"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <Button icon="ios-cloud-upload-outline" type="primary">上传文件</Button>
      </Upload>
      <Button class="back" type="success" @click="goBack(-1)">返回</Button>
    </header>
    <section class="layout-content">
       <Row :gutter="16">
        <ICol v-for="item in files.data" span="6" :key="item.name">
          <Card class="card">
            <p slot="title" class="title">
              <Tooltip :content="item.name" placement="top">
                <span>{{ item.name }}</span>
              </Tooltip>
            </p>
            <div class="content">
              <!-- TODO: 考虑增加一个进度条 -->
              <template>
                <img :src="previewUrl + item.name" class="logo">
                <div class="card-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
              </template>
            </div>
          </Card>
        </ICol>
       </Row>
    </section>
  </div>
</template>
<script>
  import { mapMutations, mapActions, mapGetters } from "vuex";
  export default {
    data() {
      return {
        page: 1,
        size: 12,
        visible: false,
        imgName: '',
        // TODO: 这里需要根据不同的bucket来区分
        previewUrl: 'http://pi12bat83.bkt.clouddn.com/',
      }
    },
    methods: {
      ...mapActions(['asyncFetchFileList', 'asyncDeleteFile']),
      // TODO: 这里的goBack也需要迁回
      ...mapMutations(['goBack']),
      // 处理文件格式
      handleFormatError(file) {
        this.$Notice.warning({
          title: '文件格式错误',
          desc: `${file.name}文件格式错误，仅支持 ".png" ".jpg" ".jpeg" ".gif" 的图片文件`
        })
      },
      // 处理文件大小
      handleMaxSize(file) {
        this.$Notice.warning({
          title: '文件大小错误',
          desc: `${file.name}太大了，请上传不超过2M的文件`
        })
      },
      // 文件预览
      handleView({ name }) {
        // TODO: 图片预览功能
        this.$Modal.confirm({
          okText: '修改',
          // ren      console.log(this.$route, this.files);
        //     }
          //   })
          // },
        })
        this.imgName = name
      },
      handleBeforeUpload() {},
      // 上传成功
      handleSuccess(res, file, fileList) {
        console.log(fileList);
        this.$Message.success({
          content: `${file.name}上传成功`,
          // onClose: () => this.asyncFetchFileList({
          //   bucket: this.name,
          //   page: this.page,
          //   size: this.size,
          // })
        })
      },
      // 上传失败
      handleError(err, file) {
        this.$Message.error({
          content: `${file.name}上传失败，请稍后重试`,
        })
      },
      // 文件删除
      handleRemove(item) {
        // TODO: 缺少ID
        this.asyncDeleteFile({ bucket: this.name, name: item.key })
      }
    },
    computed: mapGetters(['name', 'files']),
    mounted() {
      this.asyncFetchFileList({
        bucket: this.name,
        page: this.page,
        size: this.size,
      });
    }
  }
</script>
<style scoped>
  

</style>

