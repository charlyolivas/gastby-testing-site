import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Icon from "../components/icon"

const Card = ({ item }) => {
  const { slug, title, price, tag, image } = item
  return (
    <Link to={`/products/${slug}`}>
      <div className=" bg-white border rounded shadow">
        <div className="relative">
          <div>
            <Img
              fluid={image.fluid}
              alt={title}
              className="h-56 hover:opacity-50"
            />
          </div>
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            className="absolute bottom-0 px-2 py-1 mb-2 ml-3 text-sm text-white rounded"
          >
            {tag}
          </div>
          <div
            style={{ bottom: "-10px" }}
            className="absolute right-0 w-10 mr-2"
          >
            <Icon
              styles="text-red-400 bg-white border border-9 rounded-full"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </div>
        </div>
        <div className="p-3">
          <h3 className="mr-10 text-md truncate-2nd ml-1 text-dark">{title}</h3>
          <div className="flex w-full mt-3">
            <div className="w-8/12 inline-flex space-x-1">
              <Icon
                styles="text-green-500 text-opacity-60 pt-0.5 pb-0.5"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <p className="text-md font-bold text-green-600 text-opacity-70 tracking-widest">{price}</p>
            </div>
            <div className="w-4/12 right-0 mr-2">
              <button
                className="text-md float-right px-4 py-1 text-primary font-semibold
               rounded-full border-2 border-ligth_gray hover:text-white hover:bg-primary 
               hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
