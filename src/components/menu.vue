<template>
    <Menu :theme="theme" active-name="1-1" :open-names="['1']">
        <Submenu 
            v-for="item in menu"
            :key="item.key"
            :name="1"
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
<script>
    export default {
        data() {
            return {
                theme: 'dark',
                menu: [{
                    name: '文件处理',
                    key: 'fileOpera',
                    icon: 'ios-filing',
                    children: [{
                        name: '存储空间',
                        key: 'storeSpace',
                    }],
                }],
            };
        },
    };
</script>

