<template>
    <div class="table">
        <Table border :columns="columns" :data="data" :loading="loading" />
        <Page show-total :total="total" :page-size="pageSize" @on-change="onChange" />
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import { isEqual, difference } from 'lodash';

    interface ColumnItems {
        title: string;
        key: string;
        render: () => void;
    }
    // interface StoreSet {
    //     { [key: string]: number};
    // }

    interface Map<K, V> {
        clear(): void;
        delete(key: K): boolean;
        entries(): IterableIterator<[K, V]>;
        forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
        get(key: K): V;
        has(key: K): boolean;
        keys(): IterableIterator<K>;
        set(key: K, value?: V): Map<K, V>;
        size: number;
        values(): IterableIterator<V>;
        [Symbol.iterator]():IterableIterator<[K,V]>;
        [Symbol.toStringTag]: string;
    }

    interface MapConstructor {
        new <K, V>(): Map<K, V>;
        new <K, V>(iterable: Iterable<[K, V]>): Map<K, V>;
        prototype: Map<any, any>;
    }
// declare var Map: MapConstructor;

    @Component
    class AMTable extends Vue {
        @Prop() public columns!: ColumnItems;
        @Prop() public data !: [any];
        @Prop() public onChange!: (index: number) => void;
        @Prop() public total !: number;
        @Prop({ default: 10 }) public pageSize!: number;
        @Prop({ default: 0 }) public index !: number;
        // @Prop({ default: false }) public loading !: boolean;
        private loading: boolean = false;
        private timer: any = null;
        private store: Map<number, string> = new Map();
        private _data = [];
        @Watch('data')
        private handleDataChange(newData: any, oldData: any) {
            this.store.set(this.index, newData);
            console.warn(this.index, this.store);
            // if(this.store.has(this.index)) {

            // }
//             // console.table(oldData);
//             // console.table(newData);
//             console.log(isEqual);
//             console.warn(difference(oldData, newData));
//             var objectA = [1]
// let objectB = [2];
//             console.log(isEqual(objectA,objectB));// true
//             // this.data = newData.slice();
//             this.loading = true;
//         }
        // private beforeUpdate(a: any, b: any) {
        //     console.warn('update', a, b);
        //     this.loading = true;
        }
        private updated() {
            this.timer = setTimeout(() => {
                this.loading = false;
            }, 1600);
            this._data = this.data;
        }
        private destory() {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
    export default AMTable;
</script>

