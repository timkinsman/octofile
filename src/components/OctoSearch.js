import React from 'react';

const OctoSearch = ({msg}) => {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column" style={{margin: '-60px 0 0 0'}}>
                <img src={require('../assets/images/github.svg')} className="ui centered small image" alt="logo" />
                <h1 className="ui grey inverted header">{msg}</h1>
                <div className="ui inverted transparent icon massive input">
                    <input 
                        type="text"
                        placeholder="GitHub username..."
                    />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>
    )
}

export default OctoSearch;