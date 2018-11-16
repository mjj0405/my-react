import mockAdapter from 'axios-mock-adapter'
import axios from 'axios'
const Mock=new mockAdapter(axios)
//使用拦截器的注意事项
//只能拦截axios的请求，其他方式的请求一律访问不了接口
//不能与webpack-dev-server 中的接口同时使用

Mock.onGet('/leftList').reply(200,{
    code:0,
    data:require('./leftList.js')
})

Mock.onGet('/rightList').reply((config)=>{
    let typeId=config.params.id;
    console.log(config)
    let allData=require('./rightlist.jsx')
   let result=allData.find((v,i)=>{
        return v.id===typeId
    })
    // console.log(result,'9999')
        return[200,result]     
})