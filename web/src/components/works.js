import {useStaticQuery, graphql} from "gatsby";
import React from "react";
import Work from "./work";


const Works = (props) => {
  const data = useStaticQuery(graphql`
    query AllSanityWorks{
      allSanityWork(sort: {fields: priority, order: DESC} limit:5) {
        edges {
          node {
            id
            name
            description:_rawDescription
            date
            imageName
          }
        }
      }
    }
  `)
  let count = 0;
  return (
    <div id='works'>
      {
        data.allSanityWork.edges.map(edge => <Work key={edge.node.id} direction={(count++%2===0)?'row':'row-reverse'} {...edge.node}/>)
      }
    </div>
  )
}
export default Works;


