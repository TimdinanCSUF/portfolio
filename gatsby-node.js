const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
  // Transform the new node here and create a new node or
  // create a new node field.
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}

// projects section under construction
/* module.exports.createPages = async ({ graphql, actions }) => { 
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/projects.js')
    const res = await graphql(`
        query {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
*/