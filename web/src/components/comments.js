import React, {useEffect, useState} from 'react';
import {firestore} from "../firebase";
import Comment from "./comment";


const Comments = ({postId, language}) => {
  const [comments, setComments] = useState([]);
  const commentsRef = firestore.collection('posts').doc(postId).collection('comments');
  useEffect(() => {
    const temp = [];
    commentsRef.get().then(comments => comments.forEach(doc => temp.push(doc.data()))
    ).catch(
      //todo
    );
    setComments(temp);
  }, []);
  console.log(comments);
  return <div>
    {console.log('rendering')}
    {comments.map(comment => <Comment key={comment.date} language={language} {...comment}/>)}
  </div>
}

//todo: find out why comments won't render

export default Comments;
