import axios from "axios"
import { GET_BLOG_FAILURE, GET_BLOG_REQUEST, GET_BLOG_SUCCESS } from "./actionTypes"


export const getBlog=(page,search)=>dispatch=>
{
  let api=""
   if(search=="")
   {
    api=`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`
   }
   else
   {
     api=`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9&title=${search}`
   }
   dispatch({type:GET_BLOG_REQUEST})
   return axios.get(api).then((r)=>dispatch({type:GET_BLOG_SUCCESS,payload:r.data}))
  .catch((e)=>dispatch({type:GET_BLOG_FAILURE}))
    
}