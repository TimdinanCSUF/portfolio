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
<p>Check out my <Link to="/blog">blog</Link>, and please feel free to contact me with any questions or inquiries <Link to="/contact">here.</Link></p>
<img className={indexStyles.vase} src={logo} alt="Logo" />
    </Layout>
  )
}

export default IndexPage
