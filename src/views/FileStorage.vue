<template>
    <div class="file-storage">
        <!-- <Table :columns="tableColumns" :data="table.data" :onChange="handleChangePage" :total="table.total" :index="index" /> -->
        <AsyncTable :reqOpts="reqOpts" :columns="tableColumns" />
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Table, AsyncTable } from '@/components';

    const BASEURL = 'https://easy-mock.com/mock/5b6abb11f594902f063a3b93/vue';

    @Component({
        components: { Table, AsyncTable },
    })
    class FileStorage extends Vue {
        public tableColumns = [{
            title: '用户名',
            key: 'name',
        }, {
            title: '类型',
            key: 'type',
        }];
        public table = {
            data: [],
            total: 0,
        };
        private index: number = 1;
        private reqOpts = {
            uri: '/bucket-list',
            query: { page: 1 },
        };
        private mounted() {
            // this.asyncGetTableData();
        }
        // private asyncGetTableData(page: number = 1) {
        //     // this.table.data.length = 0;
        //     fetch(`${BASEURL}/bucket-list?page=${page}`)
        //         .then((result) => result.json())
        //         .then(({ data }) => {
        //             this.table.data = data.list.slice();
        //             this.table.total = data.total;
        //         });
        // }
        // private handleChangePage(index: number) {
        //     // TODO: this.asyncGetTableData(); 这里没有ts验证
        //     this.index = index;
        //     this.asyncGetTableData(index);
        // }
    }
    export default FileStorage;
</script>

