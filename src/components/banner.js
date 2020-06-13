import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">
          Kubiy Kitchen
            {/* <div className="main-image">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner