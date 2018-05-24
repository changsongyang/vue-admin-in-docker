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
        companyDetail
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
                        util.post('company-api/api/employee/admincheck/getcompanyidentitybyid', {
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
            return [];
        },
        getRefuseButton (h, row) {
            return [];
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
}
</script>