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
        title: '创建时间',
        align: 'center',
        key: 'creatat'
    },
    {
        title: '无限签',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            
        }
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
