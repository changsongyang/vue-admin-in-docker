/**
 * @file onlineContractTable.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
<template>
    <Table :refs="refs" :columns="onlineContractColumn" :data="onlineContractData" border disabled-hover></Table>
</template>
<script>
export default {
    name: 'online-contract-table',
    props: {
        refs: String,
        onlineContractColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            onlineContractData: []
        };
    },
    components: {

    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.columns = this.onlineContractColumn;
            this.onlineContractData = this.value;
            console.log(this.value);
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>