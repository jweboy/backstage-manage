<template>
    <AMMenu :data="menu" />
</template>
<script lang="ts">
    import { AMMenu } from '../components';
    import {  Component, Vue, Prop } from 'vue-property-decorator';

    @Component({
        components: { AMMenu },
    })
    class LeftMenu extends Vue {
        public menu = [{
            name: '文件处理',
            key: 'fileOpera',
            icon: 'ios-filing',
            children: [{
                name: '存储空间',
                key: 'storage',
                link: '/bucket',
            }],
        }];
    }
    export default LeftMenu;
</script>

