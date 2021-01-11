import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      owner:siteMetadata {
        author
        person {
          name      
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      owner: {
        author,
        person: { name },
      },
    },
  } = useStaticQuery(query)
  return (
    <div className="py-2">
      <h1 className="text-2xl text-primary">
        {name}
      </h1>
      <h2 className="text-dark_gray">{author}</h2>
    </div>
  )
}

export default Header
