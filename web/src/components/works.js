import {useStaticQuery, graphql, Link} from "gatsby";
import React from "react";
import Work from "./work";


const Works = (props) => {
  const data = useStaticQuery(graphql`
    query TopSanityWorks{
      allSanityWork(sort: {fields: priority, order: DESC} limit:5) {
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
        <p>A handful selection of my works. Click here to see all my <Link to='/works/'>works</Link>.</p>
      </div>

      {
        data.allSanityWork.edges.map(edge => <Work key={edge.node.id}
                                                   direction={(count++ % 2 === 0) ? 'row' : 'row-reverse'} {...edge.node}/>)
      }
    </section>
  )
}
export default Works;


