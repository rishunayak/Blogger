import { DELETE_FAVOURITE_BLOG_SUCCESS, GET_FAVOURITE_BLOG_SUCCESS, POST_FAVOURITE_BLOG_SUCCESS } from "./actionTypes"


const initalState=
{
    isError:false,
    isLoading:false,
    favourites: JSON.parse(localStorage.getItem("favourites")) || []
}

export const FavouriteBlogReducer=(state=initalState,action)=>
{
    switch(action.type)
    {
        case POST_FAVOURITE_BLOG_SUCCESS : {
           
            const data=[...state.favourites];
            
            const check =data.filter((ele)=>ele.id==action.payload.id)
            
            if(check.length==0)
            {
                data.push(action.payload)
                localStorage.setItem("favourites",JSON.stringify(data))
                return {...state,favourites:data}
            }
            else
            {
                return state
            }
            
           
           

        }
        case GET_FAVOURITE_BLOG_SUCCESS: return {...state,favourites: JSON.parse(localStorage.getItem("favourites")) || []}

        case DELETE_FAVOURITE_BLOG_SUCCESS : 
        {
            const data=[...state.favourites]
            const filt=data.filter((ele)=>ele.id!==action.payload)
            localStorage.setItem("favourites",JSON.stringify(filt))
            return {...state,favourites:filt}

        }
        default : return state
    }

}