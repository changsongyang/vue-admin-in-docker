/**
 * @file open-app.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/30/18
 */
<template>
<app-table refs="app-table" v-model="appTableData" :appTableColumn="appTableColumn"></app-table>
</template>
<script>
import tableData from '../components/tableData';
import appTable from '../components/appTable.vue';
import util from '@/libs/util';
export default {
    name: 'open-app',
    components: {
        appTable
    },
    data () {
        return {
            appTableColumn: [],
            appTableData: []
        };
    },
    methods: {
        getData () {
            this.appTableColumn = tableData.appTableColumn;
            const msg = this.$Message.loading({
                content: 'Loading....',
                duration: 0
            });
        }
    },
    created () {

    }
}
</script>