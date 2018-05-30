/**
 * @file appTable.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/30/18
 */
<template>
<Table :ref="refs" :columns="appTableColumn" :data="appTableData" border disabled-hover></Table>
</template>
<script>
export default {
    name: 'app-table',
    props: {
        refs: String,
        appTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            appTableData: []
        };
    },
    components: {

    },
    methods: {
        init () {
            this.columns = this.appTableColumn;
            this.appTableData = this.value;
        }
    },
    created () {
        this.init();
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>