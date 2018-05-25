/**
 * @file package-order.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
<template>
</template>
<script>
import tableData from '../components/tableData';
import util from '@/libs/util';
import packageOrderTable from '../components/packageOrderTable.vue';

export default {
    name: 'packageOrder',
    components: {
        packageOrderTable
    },
    data () {
        return {
            packageOrderTableColumn: [],
            packageOrderTableData: []
        };
    },
    created () {
        this.getData();
    },
    methods: {
        getData () {
            this.packageOrderTableColumn = tableData.packageOrderTableColumn;
            util.post('admin-api/admin/order/list', {
                status: '*',
                ptype: '*',
                pageno: 1,
                pagesize: 20
            }).then(res => {
                this.packageOrderTableData = res.data.content.datalist;
            });
        }
    }
};
</script>