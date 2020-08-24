import {useStaticQuery, graphql} from "gatsby";
import React from "react";
import PortableText from "./portableText";
import styles from "./aboutMe.module.css";


const AboutMe = (props) => {
  const data = useStaticQuery(graphql`
    query sanityAuthorAboutMe{
      sanityAuthor{
        about:_rawAbout
      }
    }
  `)

  return (
    <section id='about'>
      <div className={'sectionHeader'}>
        <h2>About Me</h2>
        <p>Few words about me, if you are interested to know me better.</p>
      </div>
      <div className={styles.container}>
        {data.sanityAuthor.about && <PortableText blocks={data.sanityAuthor.about}/>}
      </div>
    </section>
  )
}
export default AboutMe;


