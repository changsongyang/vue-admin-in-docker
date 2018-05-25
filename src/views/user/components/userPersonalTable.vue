/**
 * @file userPersonalTable.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
<template>
<div>
    <Table :ref="refs" :columns="userPersonalTableColumn" :data="userPersonalTableData" border disabled-hover></Table>
</div>
</template>
<script>
export default {
    name: 'userPersonalTable',
    props: {
        refs: String,
        userPersonalTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            userPersonalTableData: []
        };
    },
    components: {

    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.columns = this.userPersonalTableColumn;
            this.userPersonalTableData = this.value;
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>