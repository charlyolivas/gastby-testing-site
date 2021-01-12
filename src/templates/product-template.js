import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Icon from "../components/icon"

const ComponentName = ({ data }) => {
  const {
    title,
    price,
    info: { info },
    image: { fluid },
  } = data.product

  return (
    <section className="py-12">
      <div className="container mx-auto">      
      <div className='text-center -mt-9 mb-5'>
        <Link to="/products" className="inline-flex">
          <Icon styles="text-dark_gray mt-2 mr-2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </Link>
      </div>
        <article className="text-center">
          <h1 className="text-primary text-3xl mb-6">{title}</h1>
          <div className="md:w-2/3 mx-auto px-4">
            <Img fluid={fluid} alt={title} className=''/>
          </div>
          <div className="inline-block space-x-9 pt-5 space-x-2 align-middle">
            <div className='inline-flex'>
            <Icon
              styles="text-green-500 text-opacity-60 pt-1"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            <span className="text-xl font-bold text-green-600 text-opacity-70  tracking-widest">
              {price}
            </span>
              </div>
            <button className='p-3 text-white rounded-md bg-primary hover:bg-dark focus:outline-none'>Checkout</button>
          </div>
          <p className="text-xl text-justify pt-5 px-4 mx-auto max-w-screen-md">
            {info}
          </p>
        </article>
      </div>
    </section>
  )
}

export const query = graphql`
  query GetSingleProducts($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ComponentName
