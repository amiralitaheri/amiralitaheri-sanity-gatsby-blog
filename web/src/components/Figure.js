import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
import styles from './Figure.module.css';
export default ({node}) => {
  if (!node || !node.asset || !node.asset._id) { return null }
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    {maxWidth: 1080},
    clientConfig.sanity
  )
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} className={styles.image}/>
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
