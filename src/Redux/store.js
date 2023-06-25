import { legacy_createStore, applyMiddleware,compose,combineReducers,} from "redux";
import thunk from "redux-thunk";
import {BlogReducer} from "./Home/reducer"
import {CurrentBlogReducer} from "./Blog/reducer"
import {FavouriteBlogReducer} from "./Favourite/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({BlogReducer,CurrentBlogReducer,FavouriteBlogReducer});
export const store = legacy_createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)));