import React from 'react'

const Sidebar = (props) => (
    <div
        className='section-container'
        style={{
            background: '#518ee2',
            paddingTop: '4px',
            paddingRight: '6px',
        }}
    >
        <section
            style={{
                maxWidth: 960,
                marginBottom: '25px',
                position: 'relative',
                left: '2px',
                bottom: '2px',
                backgroundColor: '#000',
                padding: '1.5em',
                paddingTop: '2em'
            }}
            >
            <strong>{props.title}.</strong> {props.description}
        </section>
    </div>
);

export default Sidebar
