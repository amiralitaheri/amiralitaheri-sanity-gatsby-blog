import {useStaticQuery, graphql} from "gatsby";
import React from "react";
import Work from "./work";


const AllWorks = (props) => {
  const data = useStaticQuery(graphql`
    query AllSanityWorks{
      allSanityWork(sort: {fields: priority, order: DESC}) {
        edges {
          node {
            id
            name
            description:_rawDescription
            date
            imageName
            tags
          }
        }
      }
    }
  `)
  let count = 0;
  return (
    <section id='works'>
      <div className={'sectionHeader'}>
        <h2>Works</h2>
      </div>

      {
        data.allSanityWork.edges.map(edge => <Work key={edge.node.id}
                                                   direction={(count++ % 2 === 0) ? 'row' : 'row-reverse'} {...edge.node}/>)
      }
    </section>
  )
}
export default AllWorks;


