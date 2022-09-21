import request from "../utlis/request"

// 获取会员列表
const getlist=(page=1,size=10,data=()=>{})=>{
  return  request({
        url:`/member/list/search/${page}/${size}`,
        method:"POST",
        data
    }) 
}
// 获取供应商列表
const getlive=(page=1,size=10,data=()=>{})=>{
  return  request({
        url:`/supplier/list/search/${page}/${size}`,
        method:"POST",
        data
    })
}
export default{
    getlist,getlive
}