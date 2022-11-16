// async
// setTimeout(function(){
//     console.log(1);
// },1000)
// console.log(2);


// const sleep=function(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve(['hello','chao','ban']),ms);
//     })
// }
// sleep(1000)
//     .then(function(arr){
//         console.log(arr[0]);
//         return sleep(1000);
//     })
//     .then(function(arr){
//         console.log(arr[1])
//         return sleep(1000)        
//     })
//     .then(function(arr){
//         console.log(arr[2])
//         return sleep(1000)        
//     })
//     .then(function(){
//         console.log()
//         return sleep(1000)        
//     })

// fake Api
const users=[
    {
        id:1,
        name: 'hung dung'   
    },
    {
        id:2,
        name: 'hoang nam'   
    },
    {
        id:3,
        name: 'tuan huy'   
    },
    {
        id:4,
        name: 'Quoc Bao'   
    }
]

const comments=[
    {
        id:1,
        id_user: 1,
        content:'hello'
    },
    {
        id:2,
        id_user: 2,
        content:'chao'
    },
    {
        id:3,
        id_user: 2,
        content:'og the nao roi'
    },
    {
        id:4,
        id_user: 2,
        content:'khoe chu'
    },
    {
        id:5,
        id_user: 3,
        content:'dang lam gi day'
    },
    {
        id:6,
        id_user: 1,
        content:'con cac'
    }
]

function get_Id_User(){
    return new Promise(function(resolve){
        resolve(comments);
    })
}
function getUserbyId(arr){

        const result=users.filter(function(el){
            return arr.includes(el.id)
        })
        return new Promise(function(resolve){
            resolve(result);
        })
}

get_Id_User()
    .then(function(user_Id){
        const userId=user_Id.map(function(el){
            return el.id_user;
        })
        return getUserbyId(userId)
            .then(function(users){
                return {
                    users: users,
                    cms: comments
                }
            })
    })
    .then(function(data){
        var html='';
        data.cms.forEach(function(cm){
            const result_data=data.users.find(function(user){
                return cm.id_user === user.id
            })
            html+=`<li>${result_data.name}: ${cm.content}</li>`
            console.log(cm)
        })
        document.querySelector('ul').innerHTML=html;
    })


