/** 
 * @file personalTable.vue
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com 
 * @date 5/24/18 
 */  
<template>
    <div>
        <Table :ref="refs" :columns="personalColumn" :data="personalData" border disabled-hover></Table>
    </div>
</template>
<script>
import { Modal } from 'iview';
import util from '@/libs/util.js';
import refuseReason from './refuseReason.vue';

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
    components: {
        refuseReason
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
                            results.push(this.getViewButton(h, row));
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
            return h('Button', {
                props: {
                    type: 'text'
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
                        util.post('personal-api/api/personal/admincheck/chkmaterial', {
                            userid: row.userid,
                            status: 1
                        }).then(res => {
                            this.$Message.success('审核通过!');
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
                }, '通过')
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
                        let v1 = '';
                        this.$Modal.confirm({
                            scrollable: true,
                            okText: '保存',
                            render: () => {
                                return h(refuseReason, {
                                    on: {
                                        value1: (value1) => {
                                            v1 = value1;
                                        }
                                    }
                                });
                            },
                            onOk: (h) => {
                                if (v1 === '') {
                                    this.$Message.error('信息填写不完整!');
                                } else {
                                    this.$Message.loading({
                                        content: '正在保存..',
                                        duration: 0
                                    });
                                    util.post('personal-api/api/personal/admincheck/chkmaterial', {userid: row.userid, status: 0, reson: v1}).then(res => {
                                        this.$Message.destroy();
                                        this.$Message.success('拒绝审核成功');
                                        this.$parent.getData();
                                    });
                                }
                            }
                        });
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
};
</script>