/**
 * @file companyDetail.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/24/18
 */
<template>
<div>
    公司名称: {{ detail.name }}
    <br>
    法人名称: {{ detail.legalmanname }}
    <br>
    法人身份证号码: {{ detail.legalmanidentify }}
    <br>
    经办人名称: {{ detail.resmanname }}
    <br>
    经办人身份证号码: {{ detail.resmanidentify }}
    <br>
    身份证正反面: <img :src="detail.identityphotofront" width="150"/>
    <br>
    开户行: {{ detail.bankname }}
    <br>
    对公银行: {{ detail.banksubbranch }}
    <br>
    对公银行帐号: {{ detail.bankpublicaccount }}
    <br>
    小额验证金额: {{ detail.littlemoney }}
    <br>
    营业执照代码: {{ detail.businesslicense }}
    <br>
    营业执照图片: <img :src="detail.businesslicenseurl" width="150"/>
    <br>
    组织机构代码: {{ detail.organizationcode }}
    <br>
    组织机构图片: <img :src="detail.organizationcodeurl" width="150"/>
    <br>
    验证申请表: <img :src="detail.applicationformurl" width="150"/>
    <br>


</div>
</template>
<script>
export default {
    name: 'companyDetail',
    props: {
        value: Object
    },
    data () {
        return {
            detail: []
        };
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.detail = this.value;
        }
    },
    watch: {
        value (data) {
            this.init;
        }
    }
};
</script>