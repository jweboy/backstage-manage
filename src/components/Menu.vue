<style scoped>
    .menu{
        height: 100vh;
    }
    .title{
        margin-left: 5px;
    }
</style>
<template>
    <Menu class="menu" width="auto" theme="dark" active-name="file">
        <MenuItem v-for="item in menu" :name="item.key" :to="item.link">
            <Icon :type="item.icon" />
            <span class="title">{{item.title}}</span>
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        data() {
            return {
                menu: [{
                    title: '附件管理',
                    key: 'file',
                    link: '/file',
                    icon: 'md-archive',
                },{
                    title: '测试管理',
                    key: 'test',
                    link: '/test',
                    icon: 'md-archive',
                }]
            }
        },
    };
</script>


