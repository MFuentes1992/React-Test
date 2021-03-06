import {PostType} from './posttype';
export type Action = {
    type: "LOAD_POST",
    payload: PostType[]
}

export type ScrollEventType = {
    type: "SCROLL_DOWN",
    payload: number
}

export type SetLimit = {
    type: "SET_LIMIT",
    payload: number
}

export const loadPosts = (posts:PostType[]):Action => ({
    type: "LOAD_POST", payload: posts
});

export const incrementLimit = (val:number):ScrollEventType => ({
    type: "SCROLL_DOWN", payload: val
});

export const setLimit = (val:number):SetLimit => ({
    type: "SET_LIMIT", payload: val
});
