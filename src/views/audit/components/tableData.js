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
        key: 'id'
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
        key: 'status'
    },
    {
        title: '操作',
        align: 'center'
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
