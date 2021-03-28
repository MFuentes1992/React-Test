import {userPost} from './tReducer';
export const getPosts = async (limit:userPost["limit"]) => {
    const posts = await (
      await fetch(`https://dummyapi.io/data/api/post?limit=${limit}`, { headers: { 'app-id': '60602dd031e8510f243fb15b' } })
    ).json();
    return posts.data;
  };