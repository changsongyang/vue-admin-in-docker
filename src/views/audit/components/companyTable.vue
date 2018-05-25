/** 
 * @file companyTable.vue 
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com 
 * @date 5/24/18 
 */  
<template>
<div>
    <Table :ref="refs" :columns="companyTableColumn" :data="companyTableData" border disabled-hover></Table>
</div>
</template>
<script>
import util from '@/libs/util.js';
import companyDetail from './companyDetail.vue';
import refuseReason from './refuseReason.vue';

export default {
    name: 'companyTable',
    props: {
        refs: String,
        companyTableColumn: Array,
        value: Array
    },
    data () {
        return {
            columns: [],
            companyTableData: []
        };
    },
    components: {
        companyDetail, refuseReason
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.companyTableData = this.value;
            this.columns = this.companyTableColumn;
            this.columns.forEach(item => {
                if(item.handle) {
                    item.render = (h, params) => {
                        const row = params.row;
                        const results = [];
                        if (row.status === 2) {
                            results.push(this.getViewButton(h, row));
                            results.push(this.getPayMoneyButton(h, row));
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
            return h('Button', {
                props: {
                    type: 'text'
                },
                on: {
                    click: () => {
                        util.post('admin-api/admin/admincheck/getcompanyidentitybyid', {
                            id: row.id
                        }).then(res => {
                            this.$Modal.info({
                                scrollable: true,
                                render: () => {
                                    return h(companyDetail, {
                                        props: {
                                            value: row
                                        }
                                    });
                                }
                            });
                        });
                    }
                }
            }, [
                h('Button', {
                    style: {
                        margin: '0 -15px'
                    },
                    props: {
                        type: 'info',
                        placement: 'top'
                    }
                }, '查看')
            ]);
        },
        getPayMoneyButton (h, row) {
            return h('Poptip', {
                props: {
                    confirm: true,
                    title: '你确定要执行小额验证吗？',
                    type: 'text',
                    transfer: true
                },
                on: {
                    'on-ok': () => {
                        util.post('admin-api/admin/admincheck/chkcompanymaterial', {
                            companyid: row.companyid,
                            status: 1
                        }).then(res => {
                            this.$Message.success('打款成功!');
                            this.$parent.getData();
                        });
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
                }, '小额验证')
            ]);
        },
        getRefuseButton (h, row) {
            return h('Poptip', {
                props: {
                    confirm: true,
                    title: '你确定要拒绝审核吗？',
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
                        margin: '0 0'
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
}
</script>