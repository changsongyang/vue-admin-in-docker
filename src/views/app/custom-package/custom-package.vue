/**
 * @file custom-package.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/30/18
 */
<template>
</template>
<script>
import tableData from '../components/tableData';
export default {
    name: 'custom-package',
    components: {

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