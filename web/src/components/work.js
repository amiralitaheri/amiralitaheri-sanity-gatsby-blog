import React from 'react'
import PortableText from './portableText'
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image"
import styles from './work.module.css'

const Work = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(webp)/" }
          relativeDirectory: { eq: "images/works" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(grayscale:true){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const image = data.allFile.edges.find(image => image.node.base.split('.')[0] === props.imageName);
  return (
    <div className={styles.work} style={{flexDirection: props.direction || 'row'}}>
      <div className={styles.verticalLine}/>
      <Img
        className={styles.image}
        fixed={image?.node.childImageSharp.fixed}
        alt={props.name}
        imgStyle={{
          objectFit: 'contain'
        }}
      />
      <div className={styles.verticalLine}/>
      <div className={styles.text}>
        <span className={styles.date}>{props.date}</span>
        <h3>{props.name}</h3>
        {props.description && <PortableText blocks={props.description}/>}
        <div className={styles.tags}>{props.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>

    </div>
  )
}


export default Work
