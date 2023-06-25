import { GET_CURRENT_BLOG_FAILURE, GET_CURRENT_BLOG_REQUEST, GET_CURRENT_BLOG_SUCCESS } from "./actionTypes"



const initalValue={
    isLoading:false,
    isError:false,
    currentBlog:[],
}

export const CurrentBlogReducer=(state=initalValue,action)=>
{
   switch(action.type)
   {
    case GET_CURRENT_BLOG_REQUEST : return {...state,isLoading:true}
    case GET_CURRENT_BLOG_SUCCESS : return {...state,isLoading:false,currentBlog:action.payload}
    case GET_CURRENT_BLOG_FAILURE : return {...state,isLoading:false,isError:true}
    default : return state
   }
}