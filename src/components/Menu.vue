<style scoped>
    .menu{
        height: calc(100vh - 64px);
    }
</style>

<template>
    <Menu class="menu" v-bind="options">
        <MenuItem 
            v-for="item in data"
            :key="item.key"
            :name="item.key"
        >
            <template slot="title">
                <Icon type="item.icon" />
                {{item.name}}
            </template>
            <router-link 
                v-for="child in item.children"
                :key="child.key"
                :name="child.key"
                :to="child.link"
            >
                <MenuItem :name="child.key">
                    <span>{{child.name}}</span>
                </MenuItem>
            </router-link>
        </MenuItem>
    </Menu>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
import LeftMenu from '@/containers/LeftMenu.vue';

    interface Options {
        theme: string;
        width: string;
    }
    interface GenaralSubMenuItems {
        name: string;
        key: string;
    }
    interface GenaralMenuItems {
        name: string;
        icon: string;
        key: string;
        children?: GenaralSubMenuItems;
        link: string;
    }

    @Component
    class AMMenu extends Vue {
        @Prop({ default() {
            return {
                theme: 'light',
                width: 'auto',
            };
        }}) public options!: Options;
        @Prop() public data !: GenaralMenuItems[];
    }
    export default LeftMenu;
</script>


