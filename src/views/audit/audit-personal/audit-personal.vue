<template>
<div>
        <personal-table refs="personal" v-model="personalTableData" :personalColumn="personalTableColumn"></personal-table>
</div>
</template>
<script>
import tableData from '../components/tableData';
import personalTable from '../components/personalTable.vue';
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
            this.personalTableData = tableData.personalTableData;
        }
    },
    created () {
        this.getData();
    }
};
</script>