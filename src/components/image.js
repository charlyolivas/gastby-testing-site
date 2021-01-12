import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GrayRoomImg from "../images/gray-room.jpg"
import InteriorImg from "../images/interior_design.svg"
import Img from "gatsby-image"

const query = graphql`
  {
    fixed: file(relativePath: { eq: "living-room.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "coffe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidSvg: file(relativePath: { eq: "living-gray.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Image = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <section className="md:inline-flex w-full text-center">
        <article className="w-full md:w-1/3">
          Norma Image with html tag
          <img src={GrayRoomImg} alt="Gray Room" />
        </article>
        <article className="w-full md:w-1/3">
          Fixed Imgae
          <br />  
          <Img fixed={data.fixed.childImageSharp.fixed} />
        </article>
        <article className="w-full md:w-1/3">
          Fluid Image
          <Img fluid={data.fluid.childImageSharp.fluid} />
        </article>
      </section>

      <section>
        <article className="text-center py-40 md:px-40">
          SVG Effect
          <Img fluid={data.fluidSvg.childImageSharp.fluid} />
        </article>
        <article className="text-center">
          Image SVG
          <img
            src={InteriorImg}
            alt=""
            className="mx-auto
          
          "
          />
        </article>
      </section>
    </>
  )
}

export default Image
