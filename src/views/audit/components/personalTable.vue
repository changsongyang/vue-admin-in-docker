<template>
    <div>
        <Table :ref="refs" :columns="personalColumn" :data="personalData" border disabled-hover></Table>
    </div>
</template>
<script>
export default {
    name: 'personalTable',
    props: {
        refs: String,
        personalColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            personalData: []
        };
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.personalData = this.value;
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>