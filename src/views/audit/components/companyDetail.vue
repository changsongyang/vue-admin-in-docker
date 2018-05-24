/**
 * @file companyDetail.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/24/18
 */
<template>
<div>
hello there {{ detail }}
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