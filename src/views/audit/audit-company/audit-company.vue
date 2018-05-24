/** 
 * @file audit-company.vue 
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com 
 * @date 5/24/18 
 */  
<template>
<div>
    <company-table refs="company" v-model="companyTableData" :companyColumn="companyTableColumn"></company-table>
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
            util.post('company-api/api/employee/admincheck/findcompanymaterial').then(res => {
                this.companyTableData = res.data.content;
            });
        }
    },
    created () {
        this.getData();
    }
}
</script>