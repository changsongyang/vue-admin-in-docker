/**
 * @file tableData.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/25/18
 */
export const packageOrderTableColumn = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '订单id',
        align: 'center',
        key: 'id',
        width: 80
    },
    {
        title: '所购套餐',
        align: 'center',
        key: 'productName'
    },
    {
        title: '可签署份数',
        align: 'center',
        key: 'number'
    },
    {
        title: '价格',
        align: 'center',
        key: 'price'
    },
    {
        title: '下单用户',
        align: 'center',
        key: 'userid'
    },
    {
        title: '状态',
        align: 'center',
        key: 'status',
        render: (h, params) => {
            const row = params.row;
            const color = row.status === 0 ? 'blue' : row.status === 1 ? 'green' : 'red';
            const text = row.status === 0 ? '等待支付' : row.status === 1 ? '支付成功' : '支付失败';
            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                }
            }, text);
        }
    }
];

const tableData = {
    packageOrderTableColumn: packageOrderTableColumn
};

export default tableData;
