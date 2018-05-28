/**
 * @file userCompanyTable.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
<template>
    <Table :refs="refs" :columns="companyUserTableColumn" :data="companyUserTableData" border disabled-hover></Table>
</template>
<script>
export default {
    name: 'userCompanyTable',
    props: {
        refs: String,
        companyUserTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            companyUserTableData: []
        };
    },
    components: {

    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.columns = this.companyUserTableColumn;
            this.companyUserTableData = this.value;
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>


