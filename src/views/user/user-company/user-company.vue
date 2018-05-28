/**
 * @file user-company.vue
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
import userCompanyTable from '../components/userCompanyTable.vue';
export default {
    name: 'user-company',
    components: {
        userCompanyTable
    },
    data () {
        return {
            companyUserTableColumn: [],
            companyUserTableData: []
        };
    },
    methods: {
        getData () {
            this.companyUserTableColumn = tableData.companyUserTableColumn;
            util.post('admin-api/admin/user/list', {
                type: 1,
                pageno: 1,
                pagesize: 20
            }).then(res => {
                this.companyUserTableData = res.data.content.datalist
            });
        }
    },
    created () {
        this.getData();
    }

};
</script>