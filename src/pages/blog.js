import React from 'react'
import Layout from '../components/layouts'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css'
import Head from '../components/head'

const BlogPage = () => {
    const data= useStaticQuery(graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___issue}, filter: {frontmatter: {type: {eq: "blog"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
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
        <Head title="Blogs" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link className={blogStyles.post} to={`/blog/${edge.node.fields.slug}`}>
                                <p>{edge.node.frontmatter.date}</p>
                                <h3>{edge.node.frontmatter.title}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
