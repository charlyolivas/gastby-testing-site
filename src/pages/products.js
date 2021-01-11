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
        <div className="flex flex-wrap ">
          {products.map(item => (
            <article key={item.id} className="w-full sm:w-1/2 md:w-1/3">
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
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default products
