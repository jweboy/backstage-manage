<template>
    <div class="table">
        <Table border :columns="columns" :data="data" :loading="loading" />
        <Page show-total :total="total" :page-size="pageSize" @change="onChange" />
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
        @Prop({ default: () => {}, type: Function }) private onChange!: (index: number) => void;
        // from async parent
        @Prop({ default: [], type: Array }) private data !: [any];
        @Prop({ default: false, type: Boolean }) private loading!: boolean;
        @Prop({ default: 0, type: Number }) private total!: number;
        // private store: Map<number, string> = new Map();
    }
    export default AMTable;
</script>

