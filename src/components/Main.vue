<style scoped>
    .breadcrumb{
        text-align: left;
        margin: 24px 0;
    }
</style>

<template>
    <Breadcrumb class="breadcrumb">
        <BreadcrumbItem>home</BreadcrumbItem>
        <BreadcrumbItem>home2</BreadcrumbItem>
    </Breadcrumb>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    class Main extends Vue {

    }
    export default Main;
</script>

