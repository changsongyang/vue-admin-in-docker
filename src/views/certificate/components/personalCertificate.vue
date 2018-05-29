/**
 * @file personalCertificate.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
<template>
    <Table :ref="refs" :columns="personalCertificateColumn" :data="personalCertificateData" border disabled-hover></Table>
</template>
<script>
export default {
    name: 'personal-certificate',
    props: {
        refs: String,
        personalCertificateColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            personalCertificateData: []
        };
    },
    components: {

    },
    methods: {
        init () {
            this.columns = this.personalCertificateColumn;
            this.personalCertificateData = this.value;
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    },
    created () {
        this.init();
    }
};
</script>