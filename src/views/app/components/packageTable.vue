/**
 * @file packageTable.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/30/18
 */
<template>
<Table :ref="refs" :columns="packageTableColumn" :data="packageTableData" border disabled-hover></Table>
</template>
<script>
import util from '@/libs/util';
export default {
    name: 'package-table',
    props: {
        refs: String,
        packageTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            packageTableData: []
        };
    },
    components: {

    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.columns = this.packageTableColumn;
            this.packageTableData = this.value;
            this.columns.forEach(item => {
                if (item.handle) {
                    item.render = (h, params) => {
                        const row = params.row;
                        const results = [];
                        if (row.status === 0) {
                            results.push(this.getAccessButton(h, row));
                            results.push(this.getRefuseButton(h, row));
                        } else {
                            results.push(this.getViewButton(h, row));
                        }
                        return h('div', results);
                    };
                }
            });
        },
        getViewButton (h, row) {
            return h('Poptip', {
                props: {
                    confirm: true,
                    title: '暂无详细资料',
                    type: 'text',
                    transfer: true
                }
            }, [
                h('Button', {
                    style: {
                        margin: '0 10px'
                    },
                    props: {
                        type: 'info',
                        placement: 'top'
                    }
                }, '查看')
            ]);
        },
        getAccessButton (h, row) {
            return h('Poptip', {
                props: {
                    confirm: true,
                    title: '你确定要通过审核吗？',
                    type: 'text',
                    transfer: true
                },
                on: {
                    'on-ok': () => {
                        
                    }
                }
            }, [
                h('Button', {
                    style: {
                        margin: '0 10px'
                    },
                    props: {
                        type: 'success',
                        placement: 'top'
                    }
                }, '通过')
            ]);
        },
        getRefuseButton (h, row) {
            return h('Poptip', {

            }, [
                h('Button', {
                    style: {
                        margin: '0 10px'
                    },
                    props: {
                        type: 'error',
                        placement: 'top'
                    }
                }, '拒绝')
            ]);
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>