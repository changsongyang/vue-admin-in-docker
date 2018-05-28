/**
 * @file tianwei-certificate.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
<template>
<div>
<i-switch size="large" @on-change="change" v-model="type">
    <span slot="open">个人</span>
    <span slot="close">企业</span>
</i-switch>
</div>
</template>
<script>
import tableData from '../components/tableData';
import companyCertificate from '../components/companyCertificate.vue';
import personalCertificate from '../components/personalCertificate.vue';
import util from '@libs/util';
export default {
    name: 'tw-certificate',
    components: {
        companyCertificate, personalCertificate
    },
    data () {
        return {
            type: true,
            twPersonalCertificateColumn: [],
            twPersonalCertificateData: [],
            twCompanyCertificateColumn: [],
            twCompanyCertificateData: []
        };
    },
    methods: {
        getPersonalData () {
            this.twPersonalCertificateColumn = tableData.twPersonalCertificateColumn;
            util.post('admin-api/companycert/getCompanyCerts', {
                currpage: 1,
                pagesize: 20
            }).then(res => {
                this.twPersonalCertificateData = res.data.content;
            });
        },
        getCompanyData () {
            this.twCompanyCertificateColumn = tableData.twCompanyCertificateColumn;
        },
        change (status) {
            if (status) {
                this.$Message.info('切换至: 天威诚信的个人版本证书');
            } else {
                this.$Message.info('切换至: 天威诚信的企业版本证书');
            }
        }
    },
    created () {
        this.getPersonalData();
        this.getCompanyData();
    }
};
</script>