<style scoped>
    .menu{
        height: calc(100vh - 64px);
    }
</style>

<template>
    <Menu class="menu" v-bind="options">
        <Submenu 
            v-for="item in data"
            :key="item.key"
            :name="item.key"
        >
            <template slot="title">
                <Icon type="item.icon" />
                {{item.name}}
            </template>
            <MenuItem 
                v-for="child in item.children"
                :key="child.key"
                :name="1"
            >
                <span>{{child.name}}</span>
            </MenuItem>
        </Submenu>
    </Menu>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

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
    export default AMMenu;
</script>


