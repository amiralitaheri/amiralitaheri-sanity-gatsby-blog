import React from "react";
import styles from './comment.module.css';
import {cn} from "../lib/helpers";

const defaultImageUrl = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png';

const Comment = ({photoURL, displayName, commentText, date, language}) => {
  return <div className={cn(styles.container, language === 'fa' && 'fa')}>
    <div className={styles.header}>
      <div className={styles.profile}>
        <img src={photoURL || defaultImageUrl} alt='profile'/>
        <span>{displayName || 'Anonymous'}</span>
      </div>
      <time>{new Date(date).toLocaleDateString("en-US")}</time>
    </div>
    <p>{commentText}</p>
  </div>
}

export default Comment;
