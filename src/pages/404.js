import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layouts'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404'd" />
    <h1>Page not found</h1>
    <p><Link to="/">Head home</Link></p>
    </Layout>
  )
}

export default NotFound
