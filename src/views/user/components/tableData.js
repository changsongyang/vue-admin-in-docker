/**
 * @file tableData.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
export const personalUserTableColumn = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '用户ID',
        align: 'center',
        key: 'userid',
        width: 80
    },
    {
        title: '昵称',
        align: 'center',
        key: 'username'
    },
    {
        title: '邮箱',
        align: 'center',
        key: 'email'
    },
    {
        title: '手机号码',
        align: 'center',
        key: 'phone'
    },
    {
        title: '状态',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            const color = row.status === 0 ? 'red' : row.status === 1 ? 'green' : 'blue';
            const text = row.status === 0 ? '未生效' : row.status === 1 ? '生效' : '等待注册';
            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                }
            }, text);
        }
    }
];

export const companyUserTableColumn = [
    {
        title: 'id',
        type: 'index',
        align: 'center',
        width: 80
    },
    {
        title: '企业ID',
        align: 'center',
        key: 'companyid'
    },
    {
        title: '邮箱',
        align: 'center',
        key: 'email'
    },
    {
        title: '创建时间',
        align: 'center',
        key: 'createdat'
    },
    {
        title: '手机号码',
        align: 'center',
        key: 'phone'
    },
    {
        title: '管理员名称',
        align: 'center',
        key: 'username'
    },
    {
        title: '操作',
        align: 'center',
        handle: true
    }
];

const tableData = {
    personalUserTableColumn: personalUserTableColumn,
    companyUserTableColumn: companyUserTableColumn
};

export default tableData;
