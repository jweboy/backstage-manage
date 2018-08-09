<template>
    <Table :loading="loading" :data="data" :total="total" :columns="columns"/>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { clearTimeout, setTimeout } from 'timers';
import { url } from '../../util';
import { RequestOptions } from '../../contants/request';
import { ColumnItems } from '../../contants/table';

// TODO: fetch需要封装
const BASEURL = 'https://easy-mock.com/mock/5b6abb11f594902f063a3b93/vue';

@Component
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
        const { uri, query } = this.reqOpts;
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
}
export default AsyncTable;
</script>

