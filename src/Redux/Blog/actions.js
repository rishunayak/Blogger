import axios from "axios"
import { GET_CURRENT_BLOG_FAILURE, GET_CURRENT_BLOG_REQUEST, GET_CURRENT_BLOG_SUCCESS } from "./actionTypes"




export const getCurrentBlog=(id)=>dispatch=>
{
    dispatch({type:GET_CURRENT_BLOG_REQUEST})
    
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((r)=>dispatch({type:GET_CURRENT_BLOG_SUCCESS,payload:r.data}))
    .catch((r)=>dispatch({type:GET_CURRENT_BLOG_FAILURE}))
}