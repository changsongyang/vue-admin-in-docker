/**
 * @file online-contract.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
<template>
    <online-contract-table refs="online-contract-table" v-model="onlineContractData" :onlineContractColumn="onlineContractColumn"></online-contract-table>
</template>
<script>
import tableData from '../components/tableData';
import onlineContractTable from '../components/onlineContractTable.vue';
import util from '@/libs/util';
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
            util.post('admin-api/contract/getallcontracts', {
                currpage: 1,
                pagesize: 20
            }).then(res => {
                this.onlineContractData = res.data.content;
            });
        }
    },
    created () {
        this.getData();
    }
};
</script>