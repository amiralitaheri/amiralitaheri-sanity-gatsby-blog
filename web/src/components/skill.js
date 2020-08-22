import React from 'react'
import PortableText from './portableText'
import styles from './skill.module.css'

const Skill = (props) => <div className={styles.skill}>
  <div className={styles.verticalLine}/>
  <div className={styles.text}>
    <h2>{props.name}</h2>
    <ul className={styles.subSkills}>
      {props.subSkills.map(subSkill => <li>{subSkill}</li>)}
    </ul>
    {props.description && <PortableText blocks={props.description}/>}
  </div>
</div>


export default Skill
