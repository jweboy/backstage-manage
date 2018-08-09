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
    class Bucket extends Vue {
        private tableColumns = [{
            title: '用户名',
            key: 'name',
        }, {
            title: '类型',
            key: 'type',
            width: 100,
        }, {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h: (name: string, options: object, text: string) => void) => {
                return h('Button', {
                    props: {
                        type: 'error',
                        size: 'small',
                    },
                }, '删除');
            },
        }];
        private reqOpts = {
            uri: '/bucket-list',
        };
    }
    export default Bucket;
</script>

