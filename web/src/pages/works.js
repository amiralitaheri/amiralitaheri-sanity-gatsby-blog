import React from 'react'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import AllWorks from "../components/allWorks";
import {graphql} from "gatsby";

export const query = graphql`
  query WorkPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`

const WorksPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors}/>
      </Layout>
    )
  }
  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title='Works'
        description={site.description}
        keywords={site.keywords}
      />
      <AllWorks/>
    </Layout>
  )
}

export default WorksPage
