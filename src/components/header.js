import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
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
);

export default Header
