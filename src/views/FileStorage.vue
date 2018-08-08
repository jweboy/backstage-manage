<template>
    <div class="file-storage">
        <AMTable :columns="tableColumns" :data="tableData" />
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { AMTable } from '@/components';

    @Component({
        components: { AMTable },
    })
    class FileStorage extends Vue {
        public tableColumns = [{
            title: '用户名',
            key: 'login',
        }, {
            title: 'ID',
            key: 'node_id',
        }];
        public tableData = [];
        private mounted() {
            this.asyncGetTableData();
        }
        private asyncGetTableData() {
            fetch('https://api.github.com/users')
                .then((result) => result.json())
                .then((data) => {
                    this.tableData = data;
                });
        }
    }
    export default FileStorage;
</script>

