import React, {useContext, useState} from "react";
import styles from './NewComment.module.css';
import UserContext from "../context/UserContext";
import ReactModal from 'react-modal';
import FirebaseLogin from "./FirebaseLogin";
import {auth, firestore} from "../firebase";


ReactModal.setAppElement('#___gatsby');
const newComment = ({postId, language}) => {
  const user = useContext(UserContext);
  const [modalState, setModalState] = useState(false);
  if (user !== null && modalState === true) {
    setModalState(false);
  }
  console.log(user);
  return <>
    <ReactModal
      isOpen={modalState}
      onRequestClose={() => setModalState(false)}
      className={styles.modalContent}
      style={{
        overlay: {
          backgroundColor: 'rgba(50,55,62, 0.9)',
        }
      }}
    >
      <FirebaseLogin/>
    </ReactModal>
    <form className={styles.form}>
      <label htmlFor='comment'>Write a comment</label>
      <textarea id='comment' className={language}></textarea>
      {user === null ? <button className={styles.primaryAction} onClick={event => {
        event.preventDefault();
        setModalState(true);
      }}>login</button> : <>
        <button className={styles.primaryAction} onClick={event => {
          event.preventDefault();
          const commentText = document.getElementById('comment').value;
          firestore.collection('posts').doc(postId).collection('comments').add({
            commentText,
            date: Date.now(),
            isAnonymous: user.isAnonymous,
            email: user.email,
            displayName: user.displayName
          }).then(
            //todo
          ).catch(
            //todo
          );
        }
        }>comment
        </button>
        <button className={styles.secondaryAction} onClick={(event => {
          event.preventDefault();
          auth.signOut();
        })}>logout
        </button>
      </>}
    </form>
  </>
}


export default newComment;
