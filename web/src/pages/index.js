import React from 'react'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Banner from "../components/banner";
import Works from "../components/works";
import Skills from "../components/skills";
import AboutMe from "../components/aboutMe";
import {graphql} from "gatsby";

export const query = graphql`
  query IndexQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`


const IndexPage = props => {
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
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Banner/>
      <Works/>
      <Skills/>
      <AboutMe/>
    </Layout>
  )
}

export default IndexPage
