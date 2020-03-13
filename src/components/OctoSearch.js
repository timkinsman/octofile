import React from 'react';

const OctoSearch = () => {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <img src={require('../assets/images/github.svg')} className="ui centered small image" alt="logo" />
                <h1 className="ui grey inverted header">Hi!</h1>
                <div className="ui inverted transparent icon massive input">
                    <input type="text" placeholder="GitHub username..." />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>
    )
}

export default OctoSearch;