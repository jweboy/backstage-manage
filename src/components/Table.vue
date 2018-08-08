<template>
    <Table v-bind="options" :columns="columns" :data="data" />
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    interface ColumnItems {
        title: string;
        key: string;
        render: () => void;
    }
    interface Options {
        border: boolean;
        height: number | string;
    }

    @Component
    class AMTable extends Vue {
        @Prop() public columns!: ColumnItems;
        @Prop() public data !: [object];
        @Prop({ default() {
            return {
                border: true,
                height: 540,
            };
        }}) public options!: Options;
    }
    export default AMTable;
</script>

