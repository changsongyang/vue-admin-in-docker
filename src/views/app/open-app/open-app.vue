/**
 * @file open-app.vue
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
    name: 'open-app',
    components: {

    },
    data () {
        return {
            appTableColumn: [],
            appTableData: []
        };
    },
    methods: {
        getData () {
            this.appTableColumn = tableData.appTableColumn;
            const msg = this.$Message.loading({
                content: 'Loading....',
                duration: 0
            });
        }
    },
    created () {

    }
}
</script>