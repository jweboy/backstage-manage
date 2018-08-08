<style lang="scss" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .nav{
        float: right;
    }
</style>
<template>
    <Header>
        <Menu v-bind="options">
            <div class="nav">
                <MenuItem
                    v-for="item in menu"
                    :key="item.key"
                    :name="item.key"
                >
                    <Icon :type="item.icon" />
                    {{item.name}}
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    interface GenaralMenuItems {
        name: string;
        icon: string;
        key: string;
    }

    interface MenuOption {
        mode: string;
        theme: string;
        activeName: string;
    }

    @Component
    class AMHeader extends Vue {
        @Prop() public menu!: GenaralMenuItems[];
        @Prop({ default() {
            return {
                theme: 'dark',
                mode: 'horizontal',
            };
        }}) public options!: MenuOption;
        // private data = this.menu;
    }
    export default AMHeader;
</script>



