<template>
    <div>
        <AMHeader msg="hello" :menu="menu" />
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import AMHeader from '@/components/Header.vue';

    @Component({
        components: { AMHeader },
    })
    class Header extends Vue {
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

