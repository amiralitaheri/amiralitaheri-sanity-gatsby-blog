import React from 'react'
import MainSpeech from "./mainSpeech";
import SocialLinks from "./socialLinks";
import styles from './banner.module.css';

const Banner = () => (
  <div className={styles.banner}>
    <SocialLinks dir='column'/>
    <div className={styles.verticalLine}/>
    <MainSpeech/>
  </div>
)

export default Banner
