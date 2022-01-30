import React from 'react'
import Layout from '../components/layouts'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css'
import Head from '../components/head'

const BlogPage = () => {
    const data= useStaticQuery(graphql`
{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "design"}}}) {
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
        <Head title="Design" />
            <h1>Design</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link className={blogStyles.post} to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage