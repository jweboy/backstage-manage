<template>
    <Table :loading="loading" :data="data" :total="total" :columns="columns" :onChange="onChange"/>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Table from './Table.vue';
import { url } from '../../util';
import { Query, RequestOptions } from '../../contants/request';
import { ColumnItems } from '../../contants/table';

// TODO: fetch需要封装
const BASEURL = 'https://easy-mock.com/mock/5b6abb11f594902f063a3b93/vue';

@Component({
    components: { Table },
})
class AsyncTable extends Vue {
    private timer: any = null;
    private loading: boolean = false;
    private data = [];
    private total = 0;
    @Prop({
        default: { uri: '/' },
        type: Object,
    }) private reqOpts!: RequestOptions;
    @Prop() private columns!: ColumnItems;
    public mounted() {
        this.asyncGetTableData();
    }
    public destory() {
        clearTimeout(this.timer);
        this.timer = null;
    }
    private asyncGetTableData(page: number = 1) {
        const { uri } = this.reqOpts;
        const query: Query = { page };
        // show loading
        this.loading = true;

        // start request
        fetch(`${BASEURL}${uri}?${url.format(query)}`)
            .then((result) => result.json())
            .then(({ data }) => {
                // hide loading
                this.timer = setTimeout(() => {
                    this.loading = false;
                }, 300);

                // set table
                this.data = data.list.slice();
                this.total = data.total;
            });
    }
    private onChange(index: number): void {
        this.asyncGetTableData(index);
    }
}
export default AsyncTable;
</script>

