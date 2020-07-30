import React from 'react'
import PortableText from './portableText'

const Work = (props) => (
  <div>
    <h3>{props.name}</h3>
    {props.description && <PortableText blocks={props.description}/>}
  </div>
)


export default Work
