/**
 * @file user-personal.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
<template>
</template>
<script>
import tableData from '../components/tableData.js';
import util from '@/libs/util.js';
import userPersonalTable from '../components/userPersonalTable.vue';
export default {
    name: 'user-personal',
    components: {
        userPersonalTable
    },
    data () {
        return {
            personalTableColumn: [],
            personalTableData: []
        };
    },
    methods: {
        getData () {
            this.personalTableColumn = tableData.personalTableColumn;
            util.post('admin-api/admin/user/list', {
                type: 0,
                pageno: 1
            }).then(res => {
                this.personalTableData = res.data.content.datalist;
            });
        }
    },
    created () {
        this.getData();
    }
};
</script>