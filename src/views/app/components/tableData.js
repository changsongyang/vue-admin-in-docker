/**
 * @file tableData.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
export const packageTableColumn = [
    {
        title: '序号',
        type: 'index',
        align: 'center',
        width: 80
    },
    {
        title: '企业名称',
        align: 'center',
        key: 'companyname'
    },
    {
        title: '套餐名称',
        align: 'center',
        key: 'name'
    },
    {
        title: '无限签',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            const color = row.endless === 0 ? 'green' : 'red';
            const text = row.endless === 0 ? '否' : '是';
            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                }
            }, text);
        }
    },
    {
        title: '签署份数',
        align: 'center',
        key: 'number'
    },
    {
        title: '金额',
        align: 'center',
        key: 'price'
    },
    {
        title: '审核状态',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            const color = row.status === 0 ? 'blue' : row.status === 1 ? 'green' : 'red';
            const text = row.status === 0 ? '等待' : row.status === 1 ? '通过' : '拒绝';
            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                }
            }, text);
        }
    },
    {
        title: '创建时间',
        align: 'center',
        key: 'creatat'
    },
    {
        title: '截止时间',
        align: 'center',
        key: 'deadline'
    },
    {
        title: '操作',
        align: 'center',
        handle: true,
        width: 200
    }
];

export const appTableColumn = [
    {
        title: '序号',
        type: 'index',
        align: 'center',
        width: 80
    },
    {

    }
];

const tableData = {
    packageTableColumn: packageTableColumn,
    appTableColumn: appTableColumn
};

export default tableData;
