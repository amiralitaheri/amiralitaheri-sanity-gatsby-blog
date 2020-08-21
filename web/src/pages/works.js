import React from 'react'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import AllWorks from "../components/allWorks";


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
      <AllWorks/>
    </Layout>
  )
}

export default IndexPage
