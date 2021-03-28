import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {userPost} from './tReducer';
import './scss/app.scss';
import {findDOMNode} from 'react-dom';
import $ from "jquery";
import {Card} from './components/card';
import {getPosts} from './API';
import {loadPosts, incrementLimit, setLimit} from './actions';
import {SearchBar} from './components/search';

function App() {
  // State Arrays - Array of posts to be displayed, Delimiter to track how many post to shows per view.
  const limit = useSelector<userPost, userPost["limit"]>((state) => state.limit);
  const posts = useSelector<userPost, userPost["posts"]>((state) => state.posts);
  // Dispatch agent to work with data management
  const dispatch = useDispatch();
  //-- Scroll event: Will trigger when scroll is down to bottom and add post to the Post state array.
  const scrollHandler = (event:any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      const input = $('input').val();
      if(input === "")
        dispatch(incrementLimit(9))
      console.log(limit);
      console.log(input);
    }
  }
  //-- Search click event: Will trigger when user hit the magnifier icon/button and load only the matching(With the text box) post
  const handleClick = (word:string) => {
    if(word.length > 0){
      if(word.toString().match(/[a-zA-Z0-9]/)){
        let auxPost:any = [];
        posts.forEach( element => {
          var re = new RegExp(word,"i");
          let find = element.text.toString().match(re);
          if(find != null){
            auxPost.push(element);
          }
        } );
        if(auxPost.length > 0)
          dispatch(loadPosts(auxPost)); // Load only the matching posts.
        else
          alert("No se encontraron posts.");
      }else{
        alert("No se aceptan characteres especiales.")
      }

    }else{
      dispatch(incrementLimit(1));
    }
  }

  //-- React hook, trigger when Limit is updated.
  useEffect(() => {
    const loadUsers = async () => {       
      const newPosts = await getPosts(limit);
      console.log(newPosts);      
      dispatch(loadPosts(newPosts));
    };
    
    loadUsers();    
  }, [limit]);

  return (
    <div>
      <SearchBar searchKeyword={handleClick} removeKeyword={handleClick} />
      <div className="container" onScroll={scrollHandler}>&nbsp;
        { posts.map( (post)=>{
          return <Card key={post.publishDate}  owner={post.owner} text={post.text} image={post.image} likes={post.likes} link={post.link} tags={post.tags} publishDate={post.publishDate} ></Card>
        } ) 
        }
      </div>
    </div>
  );
}

export default App;
