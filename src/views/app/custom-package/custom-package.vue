/**
 * @file custom-package.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/30/18
 */
<template>
<package-table refs="package-table" v-model=""></package-table>
</template>
<script>
import tableData from '../components/tableData';
import packageTable from '../components/packageTable.vue';
export default {
    name: 'custom-package',
    components: {
        packageTable
    },
    data () {
        return {
            packageTableColumn: [],
            packageTableData: []
        };
    },
    methods: {
        getData () {
            this.packageTableColumn = tableData.packageTableColumn;
            const msg = this.$Message.loading({
                content: 'Loading....',
                duration: 0
            });
        }
    },
    created () {
        this.getData();
    }
};
</script>