<template>
    <div>
        <Table :ref="refs" :columns="personalColumn" :data="personalData" border disabled-hover></Table>
    </div>
</template>
<script>
import { Modal } from 'iview';
import util from '@/libs/util.js';
const getViewButton = (h, row) => {
    return h('Button', {
        props: {
            type: 'text',
            color: 'blue'
        },
        on: {
            click: () => {
                util.post('personal-api/api/personal/admincheck/getonedet', {id: row.id}).then(res => {
                    let content = '';
                    content += '真实姓名: ' + `${res.data.content.realname}` + '<br>';
                    content += '身份证号码: ' + `${res.data.content.identitycode}` + '<br>';
                    content += '身份证有效期: ' + `${res.data.content.identityvalidity}` + '<br>';
                    content += '手持身份证图片: ' + `<img src="${res.data.content.handidentityphoto}" width="150"/>` + '<br>';
                    content += '手持身份证正面图片: ' + `<img src="${res.data.content.identityphotofront}" width="150"/>` + '<br>';
                    content += '手持身份证背面图片: ' + `<img src="${res.data.content.identityphotoreverside}" width="150"/>` + '<br>';
                    Modal.info({
                        title: '用户详情',
                        content: content
                    });
                });
            }
        }
    }, '查看');
};
const getAccessButton = (h, row) => {
    return h('Button', {
        props: {
            type: 'text',
            color: 'green'
        },
        on: {
            click: () => {

            }
        }
    }, '通过');
};
const getRefuseButton = (h, row) => {
    return h('Button', {
        props: {
            type: 'text',
            color: 'red'
        },
        on: {
            click: () => {

            }
        }
    }, '拒绝');
};
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
            this.columns = this.personalColumn;
            this.columns.forEach(item => {
                if (item.handle) {
                    item.render = (h, params) => {
                        const row = params.row;
                        const results = [];
                        if (row.status === 2) {
                            results.push(getViewButton(h, row));
                            results.push(getAccessButton(h, row));
                            results.push(getRefuseButton(h, row));
                        } else {
                            results.push(getViewButton(h, row));
                        }
                        return h('div', results);
                    };
                }
            });
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>