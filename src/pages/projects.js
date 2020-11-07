import React from 'react'
import Layout from '../components/layouts'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css'
import Head from '../components/head'

const ProjectsPage = () => {
    const data= useStaticQuery(graphql`
      query {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}, sort: {order: DESC, fields: frontmatter___date}) {
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
        <Head title="Projects" />
            <h1>Projects</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link className={blogStyles.post} to={`/projects/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ProjectsPage
