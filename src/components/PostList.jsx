import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({posts, title, remove, id, getCarInfo, basket, setModal}) => {

  {/*условная отрисовка*/}
  if(!posts.length){
    return(
      <h1 style={{textAlign: 'center'}}>
          Post list is empty
      </h1>
    )
  }

  return (
  <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
        <TransitionGroup>
          {posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
              >
            <PostItem remove={remove} number={index + 1} post={post} addToBasket={basket} />
            </CSSTransition>
          )}
        </TransitionGroup>
  </div>
  );
}


export default PostList;
