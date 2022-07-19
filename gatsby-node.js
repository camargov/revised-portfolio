const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
    query Projects {
        allPrismicProject {
          nodes {
            uid
          }
        }
      }
    `)

    data.allPrismicProject.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/' + node.uid, 
            component: path.resolve('./src/templates/project.js'),
            context: { data: node.uid }
        })
    })
}