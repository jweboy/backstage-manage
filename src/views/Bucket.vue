<style scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .card{
        margin-bottom: 15px;
    }
    .content{
        text-align: center;
    }
    .logo{
        width: 160px;
        height: 160px;
    }
</style>


<template>
    <!-- <div class="bucket">
        <AsyncTable :reqOpts="reqOpts" :columns="tableColumns" />
    </div> -->
    <div>
        <header class="header">
            <h2>存储空间列表</h2>
            <Button type="primary">上传文件</Button>
        </header>
        <Row :gutter="16">
            <Col v-for="item in list" span="6">
                <Card :borered="false" class="card">
                    <p slot="title">{{item}}</p>
                    <div class="content">
                        <img src="../assets/logo.png" class="logo" />
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            asyncGetBucketList() {
                return axios.get('http://118.24.155.105:4000/v1/qiniu/bucket')
                    .then(({ data }) => data.data)
            }
        },
        async mounted() {
            this.list = await this.asyncGetBucketList()
            console.warn(this.list);
        }
    }
</script>

