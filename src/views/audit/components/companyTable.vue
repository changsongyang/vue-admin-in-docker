/** 
 * @file companyTable.vue 
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com 
 * @date 5/24/18 
 */  
<template>
<div>
    <Table :ref="refs" :columns="companyTableColumn" :data="companyTableData" border disabled-hover></Table>
</div>
</template>
<script>
export default {
    name: 'companyTable',
    props: {
        refs: String,
        companyTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            companyTableData: []
        };
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.companyTableData = this.value;
            this.columns = this.companyTableColumn;
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
}
</script>