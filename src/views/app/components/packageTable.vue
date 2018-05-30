/**
 * @file packageTable.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/30/18
 */
<template>
<Table :ref="refs" :columns="packageTableColumn" :data="packageTableData" border disabled-hover></Table>
</template>
<script>
export default {
    name: 'package-table',
    props: {
        refs: String,
        packageTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            packageTableData: []
        };
    },
    components: {

    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.columns = this.packageTableColumn;
            this.packageTableData = this.value;
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>