<template>
    <AMHeader :menu="menu" />
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { AMHeader } from '@/components';

    @Component({
        components: { AMHeader },
    })
    class Header extends Vue {
        // public options = {
        //     activeName: 'loginOut'
        // }
        public menu = [{
            name: '个人中心',
            icon: 'md-person',
            key: 'user',
        }, {
            name: '退出登录',
            icon: 'md-close',
            key: 'loginOut',
        }];
    }
    export default Header;
</script>

