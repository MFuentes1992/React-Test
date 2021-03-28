import {UserType} from './usertype';
export type PostType = {    
    text: string,
    image: string,
    likes: number,
    link: string,
    tags: string[],
    publishDate: string,
    owner: UserType    
}