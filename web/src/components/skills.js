import {useStaticQuery, graphql} from "gatsby";
import React from "react";
import Skill from "./skill";


const Skills = (props) => {
  const data = useStaticQuery(graphql`
    query AllSanitySkill{
      allSanitySkill{
        nodes{
          id,
          name,
          description:_rawDescription,
          subSkills
        }
      }
    }

  `)

  return (
    <section id='skills'>
      <div className={'sectionHeader'}>
        <h2>Skills</h2>
        <p>A summery of things that I am good at.</p>
      </div>

      {
        data.allSanitySkill.nodes.map(node => <Skill key={node.id} {...node}/>)
      }
    </section>
  )
}
export default Skills;


