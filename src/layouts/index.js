import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

import bg from '../images/dots.png'
import './index.css'
import '../styles/layout-overide.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        backgroundImage: `url(${bg})`,
        position: 'fixed',
        left: -256,
        top: 0,
        width: 'calc(100% + 256px)',
        height: 'calc(100% + 64px)',
        zIndex: -100,
        animation: 'BackgroundAnimation 16s linear infinite'
      }}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>

<div style={{ flex: 1 }}>
                <Sidebar
                  title="Codestack"
                  description="Articles on React and Node.js. All articles are written by me. Fullstack Web Development."
                />
                <Sidebar
                  title="About"
                  description="Full-stack web developer based in the Bay Area. Likes JS, Python, Golang. Dislikes JS, Java, PHP. Learning rust."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
