/**
 * @file user-company.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
<template>
<user-company-table refs="user-company-table" v-model="companyUserTableData" :companyUserTableColumn="companyUserTableColumn"></user-company-table>
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
            const msg = this.$Message.loading({
                content: 'Loading....',
                duration: 0
            });
            util.post('admin-api/admin/user/list', {
                type: 1,
                pageno: 1,
                pagesize: 20
            }).then(res => {
                this.companyUserTableData = res.data.content.datalist;
                setTimeout(msg, 1000);
            });
        }
    },
    created () {
        this.getData();
    }

};
</script>