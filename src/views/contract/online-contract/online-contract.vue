/**
 * @file online-contract.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
<template>
</template>
<script>
import tableData from '../components/tableData';
import onlineContractTable from '../components/onlineContractTable.vue';
export default {
    name: 'online-contract',
    components: {
        onlineContractTable
    },
    data () {
        return {
            onlineContractColumn: [],
            onlineContractData: []
        };
    },
    methods: {
        getData () {
            this.onlineContractColumn = tableData.onlineContractColumn;
        }
    },
    created () {
        this.getData();
    }
};
</script>