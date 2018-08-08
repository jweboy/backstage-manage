<style scoped>
    .breadcrumb{
        text-align: left;
        margin: 24px 0;
    }
    .content{
        padding: 24px;
        background-color: #fff;
    }
</style>

<template>
    <Layout>
        <Breadcrumb class="breadcrumb">
            <BreadcrumbItem>home</BreadcrumbItem>
            <BreadcrumbItem>home2</BreadcrumbItem>
        </Breadcrumb>
        <Content class="content">
            <slot></slot>
        </Content>
    </Layout>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    class Main extends Vue {

    }
    export default Main;
</script>

