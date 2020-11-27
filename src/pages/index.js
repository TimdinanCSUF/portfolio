import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layouts'
import logo from './34496-plants.gif'
import indexStyles from './index.module.css'

const IndexPage = () => {
  return (
    <Layout>
    <Head title="Home" />
<h1>Hello.</h1>
<h2>I'm a web developer who loves economics.</h2>
<p>Check it out! This site uses static rendering, which makes things work faster.  Learn more <Link to="/blog/GatsbySite">here.</Link></p>
<img className={indexStyles.vase} src={logo} alt="Logo" />
    </Layout>
  )
}

export default IndexPage
