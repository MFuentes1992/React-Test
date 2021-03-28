import {PostType} from './posttype';

export interface userPost {
    limit: number,    
    loading: boolean,
    posts: PostType[]

}
const initialState = {
   limit: 9,   
   loading: true,
   posts: []
}


export const tReducer = (state:userPost = initialState, action: any) => {
    switch(action.type){
        case "LOAD_POST":
            return {...state, posts: action.payload}
        break;
        case "SCROLL_DOWN":
            return {...state, limit: state.limit + action.payload}
        break;
        default: 
        return state;
    }
}