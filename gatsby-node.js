const path = require("path");
// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  try {
    result.data.products.nodes.forEach(product=>{
      createPage({
        path:`/products/${product.slug}`,
        component:path.resolve(`src/templates/product-template.js`),
        context:{
          slug:product.slug,
        }
      })
    })
  } catch (error) {
    console.log(error);
  }
}
