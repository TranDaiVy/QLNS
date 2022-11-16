// const $=document.querySelector.bind(document)
// const $$=document.querySelectorAll.bind(document)


    // in Local time
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    // nowDay
    const withSlashes = [day,month,year].join('/');
    // tomorrow day
    const tomorrow = new Date(date)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const next_Day=tomorrow.getDate();
    const next_month=tomorrow.getMonth()+1;
    const next_year=tomorrow.getFullYear();

    const tomorrow_day=[next_Day,next_month,next_year].join('/')
const app={
    work_list:[
        {
            work_name:'Pesamakini Backend UI',
            start_project:`${withSlashes}`,
            end_project:`${tomorrow_day}`,
            members:4,
            work_style: function(){
                const result=this.members==1 ? "Cá Nhân" : "Team"
                console.log(this.start_project)
                return result;
            },
            
        }
    ],
    start:function(){
         this.work_list[0].work_style()
    },
}
app.start();
console.log(tomorrow_day)