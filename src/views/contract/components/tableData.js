/**
 * @file tableData.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
export const onlineContractColumn = [
    {
        title: 'id',
        type: 'index',
        align: 'center',
        width: 80
    },
    {
        title: '合同id',
        align: 'center',
        width: 80,
        render: (h, params) => {
            return h('span', params.row.contract.id);
        }
    },
    {
        title: '合同编号',
        align: 'center',
        render: (h, params) => {
            return h('span', params.row.contract.cno);
        }
    },
    {
        title: '合同标题',
        align: 'center',
        render: (h, params) => {
            return h('span', params.row.contract.title);
        }
    },
    {
        title: '创建时间',
        align: 'center',
        render: (h, params) => {
            return h('span', params.row.contract.createdat);
        }
    },
    {
        title: '发起人',
        align: 'center',
        render: (h, params) => {
            return h('span', params.row.contract.username);
        }
    },
    {
        title: '操作',
        align: 'center',
        handle: true
    }
];

const tableData = {
    onlineContractColumn: onlineContractColumn
};

export default tableData;
