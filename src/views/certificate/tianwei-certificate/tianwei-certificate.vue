/**
 * @file tianwei-certificate.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
<template>
<div>
    <Switch size="large" @on-change="change">
        <span slot="open">个人版</span>
        <span slot="close">企业版</span>
    </Switch>
</div>
</template>
<script>
import tableData from '../components/tableData';
export default {
    name: 'tw-certificate',
    components: {

    },
    data () {
        return {
            twPersonalCertificateColumn: [],
            twCompanyCertificateColumn: []
        };
    },
    methods: {
        getPersonalData () {
            this.twPersonalCertificateColumn = tableData.twPersonalCertificateColumn;
        },
        getCompanyData () {
            this.twCompanyCertificateColumn = tableData.twCompanyCertificateColumn;
        },
        change () {
            this.$Message.info('切换至: ');
        }
    },
    created () {
        this.getPersonalData();
        this.getCompanyData();
    }
};
</script>