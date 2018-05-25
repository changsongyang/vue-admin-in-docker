/** 
 * @file audit-personal.vue 
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com 
 * @date 5/24/18 
 */  
<template>
<div>
        <personal-table refs="personal" v-model="personalTableData" :personalColumn="personalTableColumn"></personal-table>
</div>
</template>
<script>
import tableData from '../components/tableData';
import personalTable from '../components/personalTable.vue';
import util from '@/libs/util.js';
export default {
    name: 'audit-personal',
    components: {
        personalTable
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
            util.post('admin-api/admin/check/personal').then(res => {
                this.personalTableData = res.data.content.datalist;
            });
        }
    },
    created () {
        this.getData();
    }
};
</script>