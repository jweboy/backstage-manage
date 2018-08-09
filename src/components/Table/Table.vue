<style scoped>
    .page{
        margin: 10px;
    }
</style>

<template>
    <div class="table">
        <Table border :columns="columns" :data="data" :loading="loading" />
        <div class="page">
            <Page :showTotal="showTotal" :total="total" :pageSize="pageSize" @on-change="onChange" />
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import { ColumnItems } from '../../contants/table';

    @Component
    class AMTable extends Vue {
        @Prop({ default: 1, type: Number }) private index!: number;
        @Prop({ default: 10, type: Number }) private pageSize!: number;
        @Prop({ default: [], type: Array }) private columns!: ColumnItems;
        @Prop({ type: Function }) private onChange!: (index: number) => void;
        @Prop({ default: true, type: Boolean }) private showTotal!: boolean;
        // from async parent
        @Prop({ default: [], type: Array }) private data !: [any];
        @Prop({ default: false, type: Boolean }) private loading!: boolean;
        @Prop({ default: 0, type: Number }) private total!: number;
        // private store: Map<number, string> = new Map();
    }
    export default AMTable;
</script>

