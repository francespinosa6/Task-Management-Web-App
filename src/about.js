import React from 'react';

function About(props) {
    return (
        <div className={'container justify-content-center'} style={{ paddingTop: '10px', marginBlock: '50px', textAlign: 'center' }}>

            <h2 style={{ fontWeight: 'bolder' }}>Welcome To My Task Management Web App!</h2><br /><br />

            <h3>The purpose of this website is to have an interactive to-do list using React.JS. <br />
                I am using Bootstrap for most of the CSS and borrowed a few components from Ant Design.</h3>
        </div>
    );
}

export default About;