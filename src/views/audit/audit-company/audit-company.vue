/** 
 * @file audit-company.vue 
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/24/18 
 */  
<template>
<div>
    <company-table refs="company" v-model="companyTableData" :companyTableColumn="companyTableColumn"></company-table>
</div>
</template>
<script>
import tableData from '../components/tableData';
import util from '@/libs/util.js';
import companyTable from '../components/companyTable.vue';
export default {
    name: 'audit-company',
    components: {
        companyTable
    },
    data () {
        return {
            companyTableColumn: [],
            companyTableData: []
        };
    },
    methods: {
        getData () {
            this.companyTableColumn = tableData.companyTableColumn;
            const msg = this.$Message.loading({
                content: 'Loading....',
                duration: 0
            });
            util.post('admin-api/admin/check/company').then(res => {
                this.companyTableData = res.data.content.datalist;
                setTimeout(msg, 1000);
            });
        }
    },
    created () {
        this.getData();
    }
};
</script>