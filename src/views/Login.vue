<style scoped>
    .layout-background{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background: url('../assets/background.png');
        background-size: cover;
    }
    .layout-form{
        background-color: #fff;
        padding: 20px;
        width: 300px;
        border-radius: 5px;
    }
    .submit-btn{
        float: right;
    }
</style>

<template>
    <div class="layout-background">
        <div class="layout-form">
            <Form ref="loginForm" :model="model" :rules="rules">
                <FormItem prop="user">
                    <Input type="text" placeholder="请输入用户名" v-model="model.user">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" placeholder="请输入密码" v-model="model.password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <span>默认用户： admin 默认密码：123</span>
                </FormItem>
                <FormItem>
                    <Button 
                        type="primary" 
                        @click="handleSubmit(model)"
                        class="submit-btn"
                    >登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    user: '',
                    password: '',
                },
                rules: {
                    user: {
                        required: true,
                        message: '请输入用户名',
                        trgger: 'blur',
                    },
                    password: [
                        {
                        required: true,
                        message: '请输入密码',
                        trgger: 'blur',
                        },
                    ]
                },
                disabled: false,
            }
        },
        methods:{
            handleSubmit(model) {
                // TODO: 增加接口
                this.$refs.loginForm.validate((valid) => {
                    if(model.user !== 'admin' || model.password !== '123') {
                        this.$Notice.error({
                            desc: '当前只支持默认用户admin'
                        })
                    } else {
                        this.$Notice.success({
                            desc: '登录成功'
                        })

                        // TODO: router处理
                        setTimeout(() => {
                            location.href = '/'
                        }, 1000)
                    }
                })
            }
        }
    }
</script>
