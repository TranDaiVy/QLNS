try
{
    const $=document.querySelector.bind(document)
    const $$=document.querySelectorAll.bind(document)

    var check_btn=$('.btn-mid')
    
const app= {
    DSNV: [
        {
            id:156,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'5 năm',
            chungchi:'Đại Học'
        },
        {
            id:209,
            name: 'Ramos',
            vitri:'Chief Executive Officer (CEO)',
            truso:'London',
            tuoi: 47,
            ngaybatdau:'2009/10/09',
            luong: '$1,200,000',
            mail:'a.ramos@datatables.net',
            kn:'5 năm',
            chungchi:'Đại Học'
        },
        {
            id:154,
            name: 'Cox',
            vitri:'Junior Technical Author	',
            truso:'San Francisco	',
            tuoi: 66,
            ngaybatdau:'2009/01/12',
            luong: '$86,000',
            mail:'a.cox@datatables.net',
            kn:'5 năm',
            chungchi:'Đại Học'
        },
        {
            id:789,
            name: 'Greer',
            vitri:'Software Engineer',
            truso:'London',
            tuoi: 41,
            ngaybatdau:'2012/10/13',
            luong: '$132,000',
            mail:'b.greer@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        },
        {
            id:456,
            name: 'Wagner',
            vitri:'Software Engineer',
            truso:'San Francisco',
            tuoi: 28,
            ngaybatdau:'2011/06/07',
            luong: '$206,850',
            mail:'b.wagner@datatables.net',
            kn:'4 năm',
            chungchi:'Đại Học'
        },
        {
            id:741,
            name: 'Williamson',
            vitri:'Integration Specialist',
            truso:'New York',
            tuoi: 61,
            ngaybatdau:'2012/12/02',
            luong: '$372,000',
            mail:'b.williamson@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        },
        {
            id:785,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        },
        {
            id:458,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'4 năm',
            chungchi:'Đại Học'
        },
        {
            id:897,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        },
        {
            id:156,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'4 năm',
            chungchi:'Đại Học'
        },
        {
            id:156,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'4 năm',
            chungchi:'Đại Học'
        },
        {
            id:156,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        },
        {
            id:156,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        },
        {
            id:156,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        },
        {
            id:156,
            name: 'Satou',
            vitri:'Accountant',
            truso:'Tokyo',
            tuoi: 33,
            ngaybatdau:'2008/11/28',
            luong: '$162,70',
            mail:'a.satou@datatables.net',
            kn:'1 năm',
            chungchi:'Đại Học'
        }
    ],
    handle: function(){

    },
    render: function(){
        const html=this.DSNV.map(function(e,i){
            return `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.vitri}</td>
                <td>${e.truso}</td>
                <td>${e.tuoi}</td>
                <td>${e.ngaybatdau}</td>
                <td>${e.luong}</td>
                <td>${e.mail}</td>
                <td>${e.kn}</td>
                <td>${e.chungchi}</td>
                <td>
                <button class="btn-mid" onclick='OpenModel(${e.id})' >Xem</button>
                <button>Sửa</button>
                <button>Xóa</button>
                </td>
            </tr>
            `
        },);
        $('#datatable-responsive tbody').innerHTML=html.join('');

        // console.log(html.join(''));
    },
    start: function(){
        this.render();
    },
};

app.start();
console.log(check_btn)
}
catch (error) {
    alert(error);
} 





