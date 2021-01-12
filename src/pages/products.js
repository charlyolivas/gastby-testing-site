import React from "react"
import { graphql } from "gatsby"
import Card from "../components/card"

const products = ({ data }) => {
  const {allContentfulProduct:{nodes:products}} =data
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h1 className="text-primary text-3xl mb-6 px-6 md:px-12">
          All products
        </h1>
        <div className="flex flex-wrap px-6">
          {products.map(item => (
             <article className="w-full md:w-1/2 lg:w-1/3 md:px-4 lg:px-6 my-5">
              <Card item={item}/>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        slug
        title
        price
        tag
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default products
