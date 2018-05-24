/** 
 * @file refuseReason.vue 
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com 
 * @date 5/24/18 
 */  
<template>
<Row>
    <div class="wrapper">
        <h4>
            <Icon type="heart"></Icon>&nbsp;拒绝理由
        </h4>
    </div>
    <div class="wrapper">
        <Input v-model="value1" @on-change="value1Change"></Input>
    </div>
</Row>
</template>
<script>
export default {
    name: 'refuseReason',
    data () {
        return {
            value1: ''
        };
    },
    methods: {
        value1Change: function () {
            var obj = this;
            this.$emit('value1', obj.value1);
        }
    }
}
</script>
