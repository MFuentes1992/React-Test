import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import {userPost} from './tReducer';
import './App.css';
import {Card} from './components/card';
import {getPosts} from './API';
import {loadPosts, incrementLimit} from './actions';
import ReactDOM from 'react-dom';

function App() {
  const limit = useSelector<userPost, userPost["limit"]>((state) => state.limit);
  const posts = useSelector<userPost, userPost["posts"]>((state) => state.posts);

  const dispatch = useDispatch();

  const scrollHandler = (event:any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      dispatch(incrementLimit(9))
      console.log(limit);
    }
  }

  useEffect(() => {
    const loadUsers = async () => {
    // setLoading(true); -> Change to Redux
      
      const newPosts = await getPosts(limit);
      console.log(newPosts);      
      dispatch(loadPosts(newPosts));
    // setUsers((prev) => [...prev, ...newUsers]); -> change to redux
    // setLoading(false); -> change to redux
    };
    
    loadUsers();
    //return () => window.removeEventListener("scroll", handleScroll);
  }, [limit]);

  return (
    <div>
    <div className="container" id="rc-c" style={{overflow: "auto", width: "800px", height: "900px", margin: "auto"}} onScroll={scrollHandler}>&nbsp;
      { posts.map( (post)=>{
        return <Card key={post.owner.id}  owner={post.owner} text={post.text} image={post.image} likes={post.likes} link={post.link} tags={post.tags} publishDate={post.publishDate} ></Card>
      } ) 
      }
    </div>
    </div>
  );
}

export default App;
