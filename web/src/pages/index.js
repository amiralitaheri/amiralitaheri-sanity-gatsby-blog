import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Banner from "../components/banner";
import Works from "../components/works";
import Skills from "../components/skills";
import AboutMe from "../components/aboutMe";


const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors}/>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO/>
      <Banner/>
      <Works/>
      <Skills/>
      <AboutMe/>
    </Layout>
  )
}

export default IndexPage
