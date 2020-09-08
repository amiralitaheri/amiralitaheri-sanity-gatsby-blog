import React, {useContext, useState} from "react";
import styles from './NewComment.module.css';
import UserContext from "../context/UserContext";
import ReactModal from 'react-modal';
import FirebaseLogin from "./FirebaseLogin";
import {auth} from "../firebase";

ReactModal.setAppElement('#___gatsby');
const newComment = () => {
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
      <label>Write a comment</label>
      <textarea></textarea>

      {user === null ? <button className={styles.primaryAction} onClick={event => {
        event.preventDefault();
        setModalState(true);
      }}>login</button> : <>
        <button className={styles.primaryAction}>comment</button>
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
