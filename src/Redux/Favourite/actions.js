import { DELETE_FAVOURITE_BLOG_SUCCESS, GET_FAVOURITE_BLOG_SUCCESS, POST_FAVOURITE_BLOG_SUCCESS } from "./actionTypes"


export const getFavouriteBlog=()=>dispatch=>
{
    
    return  dispatch({type:GET_FAVOURITE_BLOG_SUCCESS})
}

export const postFavouriteBlog=(data)=>dispatch=>
{
   return  dispatch({type:POST_FAVOURITE_BLOG_SUCCESS,payload:data})
}

export const deleteFavouriteBlog=(id)=>dispatch=>
{
    return  dispatch({type:DELETE_FAVOURITE_BLOG_SUCCESS,payload:id})
}