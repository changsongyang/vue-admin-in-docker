import { Modal } from 'iview';
import util from '@/libs/util.js';

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
        handle: true
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

const tableData = {
    personalTableColumn: personalTableColumn,
    personalTableData: personalTableData
};

export default tableData;
