import React from 'react'
import Layout from '../components/layouts'
import { Link, graphql, useStaticQuery } from 'gatsby'
import projectStyles from './project.module.css'
import Head from '../components/head'

const BlogPage = () => {
    const data= useStaticQuery(graphql`
{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
          type
          brief
        }
        fields {
          slug
        }
      }
    }
  }
}
      `)

      return (
        <Layout>
        <Head title="Projects" />
            <h1>Projects</h1>
            <ol className={projectStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link className={projectStyles.post} to={`/blog/${edge.node.fields.slug}`}>
                                <h2 className={projectStyles.title}>{edge.node.frontmatter.title}</h2>
                                 <p className={projectStyles.breif}>{edge.node.frontmatter.brief}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
