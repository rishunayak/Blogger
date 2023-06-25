import { GET_BLOG_FAILURE, GET_BLOG_REQUEST, GET_BLOG_SUCCESS } from "./actionTypes"


const initalValue={
    isLoading:false,
    isError:false,
    blog:[],
}

export const BlogReducer=(state=initalValue,action)=>
{
   switch(action.type)
   {
    case GET_BLOG_REQUEST : return {...state,isLoading:true}
    case GET_BLOG_SUCCESS : return {...state,isLoading:false,blog:action.payload}
    case GET_BLOG_FAILURE : return {...state,isLoading:false,isError:true}
    default : return state
   }
}