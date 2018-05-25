/**
 * @file user-personal.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
<template>
<div>
    <user-personal-table refs="user-personal-table" v-model="userPersonalTableData" :userPersonalTableColumn="userPersonalTableColumn"></user-personal-table>
</div>
</template>
<script>
import tableData from '../components/tableData';
import util from '@/libs/util';
import userPersonalTable from '../components/userPersonalTable.vue';
export default {
    name: 'user-personal',
    components: {
        userPersonalTable
    },
    data () {
        return {
            userPersonalTableColumn: [],
            userPersonalTableData: []
        };
    },
    methods: {
        getData () {
            this.userPersonalTableColumn = tableData.personalUserTableColumn;
            util.post('admin-api/admin/user/list', {
                type: 0,
                pageno: 1,
                pagesize: 20
            }).then(res => {
                this.userPersonalTableData = res.data.content.datalist;
            });
        }
    },
    created () {
        this.getData();
    }
};
</script>