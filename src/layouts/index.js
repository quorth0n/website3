import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

import bg from '../images/dots.png'
import './index.css'
import '../styles/layout-overide.css'

const Layout = ({ children, data }) => (
  <div>
  <div
    style={{
      marginBottom: '3rem',
      borderBottom: '2px solid #FF9B9B',
      backgroundImage: "url('http://systemspace.link/res/img/bg/home-header.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundAttachment: 'fixed',
      padding: '20vw',
      paddingLeft: '5vw'
    }}
  >
    <h1
      style={{
        fontSize: '8vw',
        textShadow: '3px 6px #000, 0px -1px #000, 0px 1px #000, -1px 0px #000, 1px 0px #000, -1px -1px #000, 1px 1px #000, -1px 1px #000, 1px -1px #000',
        color: '#fff',
        display: 'inline',
        /*position: 'relative',
        top: '5em',
        left: '2em',*/
        //margin: '3.9rem',
        fontStyle: 'italic',
        marginBottom: '1em'
      }}
    >
      Cogito, 
      <br/><br/>
      ergo sum.
    </h1>
{/*     <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '3.9rem'
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center',fontSize: '18px' }}>
        <Link
          to="/"
          style={{
            color: '#FF9B9B',
            textDecoration: 'none',
//            fontSize: '18px'
          }}
        >
          {siteTitle} // whirish
        </Link>
      </h1>
      <h2 style={{ paddingTop: '2em', textAlign: 'center', fontSize: '17px', marginBottom: 0 }}>
        <Link
          to="/about"
          style={{
            color: '#FF9B9B',
            textDecoration: 'none',
          }}
        >
        /about
        </Link>
        &nbsp;
        &nbsp;
        <Link
          to="/projects"
          style={{
            color: '#FF9B9B',
            textDecoration: 'none',
          }}
        >
        /projects
        </Link>
        &nbsp;
        &nbsp;
        <Link
          to="/blog"
          style={{
            color: '#FF9B9B',
            textDecoration: 'none',
          }}
        >
        /blog
        </Link>
        &nbsp;
        &nbsp;
        |
        &nbsp;
        &nbsp;
        <a
          href="https://github.com/whirish"
          style={{
            color: '#FF9B9B',
            textDecoration: 'none',
          }}
        >
        /github
        </a>
        &nbsp;
        &nbsp;
        <a
          href="https://github.com/whirish"
          style={{
            color: '#FF9B9B',
            textDecoration: 'none',
          }}
        >
        /linkedin
        </a>
        &nbsp;
        &nbsp;
        <a
          href="mailto:lpoflynn@protonmail.ch"
          style={{
            color: '#FF9B9B',
            textDecoration: 'none',
          }}
        >
        /email
        </a>
      </h2>
    </div>*/ }
  </div>
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
