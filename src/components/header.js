import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      owner: siteMetadata {
        author
        person {
          name
        }
        description
        data {
          name
          link
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
        description,
        data,
      },
    },
  } = useStaticQuery(query)
  return (
    <div className="my-9">
      <div className="bg-white max-w-screen-sm p-4 rounded-md shadow-md mx-auto">
        <span className="tetx-dark font-light">Author info:</span>
        <div className="ml-4 mb-4">
          <h1 className="text-2xl text-primary">{name}</h1>
          <h2 className="text-dark_gray">{author}</h2>
        </div>
        <br />
        <hr />
        <br />
        <span className="tetx-dark font-light">Project info:</span>
        <div className="ml-4">
          <p className="py-4 max-w-screen-sm text-xl text-dark">
            {description}
          </p>
        </div>
        <span className="tetx-dark font-light">Integrations:</span>
        <div className="ml-4">
          {data.map((item, i) => (
            <div key={i} className="py-4 max-w-screen-sm block">
              <span className="sm:inline-flex space-x-3 align-middle">
                <h3 className="text-xl text-dark_gray ">{item.name} </h3>
                <a href={item.link} target='_blank' rel="noreferrer"  className="text-primary pt-0.5">
                  {item.link}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
