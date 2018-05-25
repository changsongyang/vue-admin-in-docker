/**
 * @file packageOrderTable.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
<template>
<div>
    <Table :ref="refs" :columns="packageOrderTableColumn" :data="packageOrderTableData" border disabled-hover></Table>
</div>
</template>
<script>
export default {
    name: 'packageOrderTable',
    props: {
        refs: String,
        packageOrderTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            packageOrderTableData: []
        };
    },
    components: {

    },
    created () {
        this.init();
    },
    watch: {
        value (data) {
            this.init();
        }
    },
    methods: {
        init () {
            this.columns = this.packageOrderTableColumn;
            this.packageOrderTableData = this.value;
        }
    }

};
</script>