<template>
    <div class="bucket">
        <AsyncTable :reqOpts="reqOpts" :columns="tableColumns" />
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { AsyncTable } from '@/components';

    @Component({
        components: { AsyncTable },
    })
    class FileStorage extends Vue {
        private tableColumns = [{
            title: '用户名',
            key: 'name',
        }, {
            title: '类型',
            key: 'type',
        }];
        private reqOpts = {
            uri: '/bucket-list',
        };
    }
    export default FileStorage;
</script>

