import {userPost} from './tReducer';
export const getPosts = async (limit:userPost["limit"]) => {
    const posts = await (
      await fetch(`https://dummyapi.io/data/api/post?limit=${limit}`, { headers: { 'app-id': '6061066405a27f903f3f0e1c' } })
    ).json();
    return posts.data;
  };