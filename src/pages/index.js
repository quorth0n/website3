import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

import '../styles/blog-listing.css';

export default function Index() {
  return (
    <div className="blog-posts">
      <div
        className="blog-post-preview"
        style={{
          backgroundColor: '#000',
          color: 'hsl(155.96821465571213, 19.992004566268452%, 60%)',
          padding: '1em'
        }}
        >
        <h1>
          Welcome
        </h1>
        <p>
          I'm a developer from the SF Bay Area.
        </p>
      </div>
    </div>
  );
}
