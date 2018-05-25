/**
 * @file tableData.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/24/18
 */
export const personalTableColumn = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '认证id',
        align: 'center',
        key: 'id',
        width: 80
    },
    {
        title: '手机号码',
        align: 'center',
        key: 'phone'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'realname'
    },
    {
        title: '状态',
        align: 'center',
        key: 'status',
        width: 150,
        render: (h, params) => {
            const row = params.row;
            const color = row.status === 1 ? 'green' : row.status === 2 ? 'blue' : 'red';
            const text = row.status === 1 ? '通过' : row.status === 2 ? '审核中' : '拒绝';
            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                }
            }, text);
        }
    },
    {
        title: '操作',
        align: 'center',
        handle: true,
        width: 300
    }
];

export const personalTableData = [
    {
        id: '100',
        phone: '15757125631',
        realname: '刘美胜奇',
        status: '1'
    }
];

export const companyTableColumn = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '认证id',
        align: 'center',
        key: 'id',
        width: 80
    },
    {
        title: '企业名称',
        align: 'center',
        key: 'name'
    },
    {
        title: '法人／经办人',
        align: 'center',
        key: 'legalmanname'
    },
    {
        title: '对公银行',
        align: 'center',
        key: 'banksubbranch'
    },
    {
        title: '开户帐号',
        align: 'center',
        key: 'bankpublicaccount'
    },
    {
        title: '小额对账',
        align: 'center',
        key: 'littlemoney'
    },
    {
        title: '状态',
        align: 'center',
        key: 'status',
        width: 150,
        render: (h, params) => {
            const row = params.row;
            const color = row.status === 0 ? 'red' : row.status === 1 ? 'green' : 'blue';
            const text = row.status === 0 ? '拒绝' : row.status === 1 ? '通过' : row.status === 2 ? '审核中' : '小额验证中';
            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                }
            }, text);
        }
    },
    {
        title: '操作',
        align: 'center',
        handle: true,
        width: 300
    }
];

export const companyTableData = [
    {
        id: 21,
        name: '测试企业',
        legalmanname: 'lm',
        banksubbranch: '工商银行',
        bankpublicaccount: '134231234234234242342342314',
        littlemoney: '',
        status: '2'
    }
];

const tableData = {
    personalTableColumn: personalTableColumn,
    personalTableData: personalTableData,
    companyTableColumn: companyTableColumn,
    companyTableData: companyTableData
};

export default tableData;
