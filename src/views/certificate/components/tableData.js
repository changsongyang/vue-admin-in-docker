/**
 * @file tableData.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 5/28/18
 */
export const twPersonalCertificateColumn = [
    {
        title: '序号',
        type: 'index',
        align: 'center',
        width: 80
    },
    {
        title: '证书颁发用户',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            return h('span', row.user.username);
        }
    },
    {
        title: '证书序列号',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            return h('span', row.personalTianweiCert.cno);
        }
    },
    {
        title: '证书存放路径',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            return h('span', row.personalTianweiCert.savepath);
        }
    },
    {
        title: '创建时间',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            return h('span', row.personalCert.createdat);
        }
    },
    {
        title: '是否被使用',
        align: 'center',
        render: (h, params) => {
            const row = params.row;
            const text = row.personalCert.isused === 1 ? '已使用' : '未使用';
            const color = row.personalCert.isused === 1 ? 'green' : 'red';
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

export const twCompanyCertificateColumn = [
    {
        title: '序号',
        type: 'index',
        align: 'center'
    },
    {
        title: '证书序列号',
        align: 'center'
    },
    {
        title: '证书颁发企业',
        align: 'center'
    },
    {
        title: '证书存放路径',
        align: 'center'
    },
    {
        title: '是否被使用',
        align: 'center'
    },
    {
        title: '操作',
        align: 'center',
        handle: true
    }
];

const tableData = {
    twPersonalCertificateColumn: twPersonalCertificateColumn,
    twCompanyCertificateColumn: twCompanyCertificateColumn
};

export default tableData;
