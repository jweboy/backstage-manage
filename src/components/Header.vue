<style lang="scss" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
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
    
    @Component
    class AMHeader extends Vue {
        @Prop() public menu!: GenaralMenuItems[];
        private data = this.menu;
    }
    export default AMHeader;
</script>



