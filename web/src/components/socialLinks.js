import {IconContext} from "react-icons";
import React from 'react'
import {FaTelegramPlane, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn,FaGitlab} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import styles from './socialLinks..module.css'

const SocialLinks = (props) => (
  <IconContext.Provider value={{size: '1.2em'}}>
    <ul className={styles.socialLinks} style={{flexDirection:props.dir}}>
      <li><a href='https://github.com/amiralitaheri' target="_blank" rel='noopener'><FaGithub/></a></li>
      <li><a href='https://twitter.com/amiralitaheri64' target="_blank" rel='noopener'><FaTwitter/></a></li>
      <li><a href='http://t.me/amiralitaheri' target="_blank" rel='noopener'><FaTelegramPlane/></a></li>
      <li><a href='https://www.instagram.com/amiralitaheri64' target="_blank" rel='noopener'><FaInstagram/></a></li>
      <li><a href='https://www.linkedin.com/in/amiralitaheri64/' target="_blank" rel='noopener'><FaLinkedinIn/></a></li>
      <li><a href='mailto:amiralitaheri64@gmail.com' target="_blank" rel='noopener'><FiMail/></a></li>
      <li><a href='https://gitlab.com/amiralitaheri' target="_blank" rel='noopener'><FaGitlab/></a></li>
    </ul>
  </IconContext.Provider>
)

export default SocialLinks
