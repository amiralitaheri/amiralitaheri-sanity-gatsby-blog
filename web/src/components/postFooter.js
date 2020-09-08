import React from 'react'
import {FaTelegramPlane, FaTwitter, FaClipboard} from "react-icons/fa";
import {GoComment} from "react-icons/go";

import styles from './postFooter.module.css';
import {IconContext} from "react-icons";

export default ({tags}) => {
  return <IconContext.Provider value={{size: '2em'}}>
    <footer className={styles.footer}>
      <div className={styles.shareButtons}>
        <button className={styles.shareButton} type='button' onClick={() => {
          const url = `https://t.me/share/url?url=${location.href}`
          let win = window.open(url, '_blank');
          win.focus();
        }
        }><FaTelegramPlane/>Share on Telegram
        </button>
        <button className={styles.shareButton} type='button' onClick={() => {
          const url = `https://twitter.com/intent/tweet?url=${location.href}&hashtags=${tags.toString()}&related=amiralitaheri64`;
          let win = window.open(url, '_blank');
          win.focus();
        }}><FaTwitter/>Share on Twitter
        </button>
        <button className={styles.shareButton} type='button' onClick={() => {
          navigator.clipboard.writeText(location.href);
        }}><FaClipboard/>Copy URL
        </button>
      </div>
      <div>
        <button type='button' className={styles.actionButton} onClick={() => {
          history.replaceState(null, null, location.href + '#commentSection');
        }}><GoComment/>Comment
        </button>
      </div>
    </footer>
  </IconContext.Provider>
}


