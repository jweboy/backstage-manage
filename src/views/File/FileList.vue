<style scoped>
  .el-card{
    margin-bottom: 20px;
  }
  .el-dropdown {
    float: right;
    color: #409eff;
    cursor: pointer;
  }
  .layout-header{
    margin-bottom: 15px;
  }
  .layout-list{
    padding: 15px 7px;
    margin-bottom: 15px;
    height: 656px;
    border: 1px solid #eee;
  }
  .thumbnail{
    display: block;
    margin: auto;
    width: 100%;
    max-width: 200px;
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content{
    padding-top: 14px;
  }
  .bottom {
    margin-top: 13px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .pagination{
    float: right;
  }
  .btns{
    float: right;
  }
</style>

<template>
  <div class="file-list">
    <header class="layout-header">
      <el-row type="flex" justify="space-between">
        <el-col :span="2">
          <el-button class="back" type="success" @click="goBack(-1)">返回</el-button>
        </el-col>
        <el-col :span="2">
          <!-- 不显示默认上传列表，文件必须是图片类型，文件大小不超过2M  :action="uploadUrl + name" -->
          <el-upload 
            :action="uploadUrl + name"
            :before-upload="handleBeforeUpload"
            :show-file-list="false"
            :on-success="handleSuccessUpload"
            :on-error="handleErrorUpload"
          >
            <el-button icon="ios-cloud-upload-outline" type="primary">上传文件</el-button>
          </el-upload>
        </el-col>
      </el-row>
    </header>
    <div class="layout-content">
      <el-row :gutter="16" class="layout-list">
        <el-col v-for="(item, index) in files.data" :span="6" :key="index">
          <el-card>
            <img class="thumbnail" :src="previewUrl + item.name" />
            <div class="content">
              <div class="title">
                <span>{{ item.name }}</span>
                <!-- <el-tooltip :content="item.name">
                  <span>{{ item.name }}</span>
                </el-tooltip> -->
              </div>
              <div class="bottom">
                <span class="time">{{currentDate}}</span>
                <span class="btns">
                  <el-button 
                    @click.stop="handleDownloadFile(item)"
                    type="warning" 
                    icon="el-icon-download" 
                    size="mini" 
                    circle
                  ></el-button>
                  <el-button 
                    @click.stop="handleEditFile(item)"
                    type="primary" 
                    icon="el-icon-edit" 
                    size="mini" 
                    circle
                  ></el-button>
                  <el-button 
                    @click.stop="handleDeleteFile(item)"
                    type="danger" 
                    icon="el-icon-delete" 
                    size="mini" 
                    circle
                  ></el-button>
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="pagination">
        <el-pagination 
          background
          layout="prev, pager, next"
          :page-size="size"
          :page-count="page"
          :total="files.total"
          @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>
    <el-dialog width="500px" title="编辑图片" :visible.sync="dialogVisible">
      <el-form ref="editForm" :model="editForm" label-position="left" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input type="name" v-model="editForm.name" placeholder="请输入名称" />
        </el-form-item>
        <!-- <el-form-item label="类型" prop="type">
          <el-radio-group v-model="editForm.type">
            <el-radio label=".png" type="type"></el-radio>
            <el-radio label=".jpg" type="type"></el-radio>
            <el-radio label=".jepg" type="type"></el-radio>
            <el-radio label=".gif" type="type"></el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">确定</el-button>
          <el-button @click="handleCancelDialog">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import { mapMutations, mapActions, mapGetters } from "vuex";
  import { download } from '../../util';
  export default {
    data() {
      return {
        page: 1,
        size: 8,
        loadingText: '',
        visible: false,
        imgName: '',
        // TODO: 这里需要根据不同的bucket来区分
        previewUrl: 'http://pkhleymnc.bkt.clouddn.com/',
        uploadUrl: 'http://118.24.155.105:4000/api/v1/qiniu/file?bucket=',
        currentDate: new Date().toLocaleDateString(),
        dialogVisible: false,
        editForm: {
          name: '',
          type: 0,
        },
        currentItem: {},
      }
    },
    methods: {
      ...mapActions(['asyncFetchFileList', 'asyncDeleteFile', 'asyncUpdateFile', 'syncCancelRequest', 'asyncDownloadFile']),
      // TODO: 这里的goBack也需要迁回
      ...mapMutations(['goBack', 'setBucket']),
      /* =================== 文件上传 =================== */
      handleBeforeUpload(file) {
        // TODO: 图片格式正则
        // const imgReg = /\.(jpe?g|gif|png)/;
        const isImage = ~file.type.indexOf('image');
        const isLt2M = file.size / 1024 / 1024 < 2;

        if(!isImage) {
          this.$message.error(`${file.name}文件格式错误，仅支持 ".png" ".jpg" ".jpeg" ".gif" 的图片文件`);
        }

        if(!isLt2M) {
          this.$message.error(`${file.name}太大了，请上传不超过2M的文件`);
        }

        // console.log(file, isImage && isLt2M);
        // console.log('Upload is image: %s', isImage);
        // console.log('Upload is in limit size: %s', isLt2M);

        return !!isImage && isLt2M;
      },
      // 上传成功
      handleSuccessUpload(res, file, fileList) {
        this.$message.success(`${file.name}上传成功`);
        this.getCurrPageData();
      },
      // 上传失败
      handleErrorUpload(err, file) {
        this.$message.error(`${file.name}上传失败，请稍后重试`);
      },
      /* =================== 操作按钮 =================== */
      // 文件删除
      handleDeleteFile(item) {
        this.$msgbox({
          type: 'warning',
          title: '提示',
          message: '此操作将永久删除该文件, 是否继续?',
          showCancelButton: true,
          beforeClose: (action, instance, done) => {
            // TODO: 删除不要loading
            if(action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              
              this.asyncDeleteFile({id: item.id })
                .then(() => {
                  done();
                  instance.confirmButtonLoading = false;
                  this.$message({
                    type: 'success',
                    message: '删除成功',
                  });
                  setTimeout(() => {
                    this.getCurrPageData();
                  }, 300);
                })
                .catch(() => {
                  instance.confirmButtonLoading = false;
                  done();
                })
            }
            if(action === 'cancel') {
              instance.confirmButtonLoading = false;
              done();
              this.syncCancelRequest();
            }
          },
        })
      },
      // 文件预览 + 编辑文件信息
      handleEditFile(item) {
        this.dialogVisible = true;
        this.editForm.name = item.name;
        this.currentItem = item;
        // this.asyncGetFielDetail({ id: item.id });
      },
      // 文件下载
      handleDownloadFile(item) {
        const name = item.name;
        
        this.asyncDownloadFile({ name }).then(data => download(name, data));
      },
      // 翻页
      handlePageChange(page) {
        this.page = page;
        this.getCurrPageData();
      },
      handleSubmit(item) {
        this.$refs.editForm.validate((valid) => {
          if(valid) {
            // console.log(this.editForm);
            const body = {
              name: this.editForm.name,
              id: this.currentItem.id,
            };

            this.handleCancelDialog();
            
            this.asyncUpdateFile(body)
              .then(() => {
                this.getCurrPageData();
              });
          }
        })
      },
      handleCancelDialog() {
        this.dialogVisible = false;
        this.$refs.editForm.resetFields();
      },
      // 获取列表
      getCurrPageData() {
        return this.asyncFetchFileList({bucket: this.name,page: this.page,size: this.size });
      },
    },
    computed: mapGetters(['name', 'files']),
    mounted() {
      this.setBucket({ bucket: this.$route.params.bucket });
      this.getCurrPageData();
    }
  }
</script>

