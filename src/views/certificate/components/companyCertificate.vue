/**
 * @file companyCertificate.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
<template>
    <Table :ref="refs" :columns="companyCertificateColumn" :data="companyCertificateData" border disabled-hover></Table>
</template>
<script>
export default {
    name: 'company-certificate',
    props: {
        refs: String,
        companyCertificateColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            companyCertificateData: []
        };
    },
    methods: {
        init () {
            this.companyCertificateColumn = this.columns;
            this.companyCertificateData = this.value;
        }
    },
    created () {
        this.init();
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>