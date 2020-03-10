import React from 'react';

const App = () => {
    var github = require('octonode');
    var client = github.client();

    var ghuser = client.user('timkinsman');
    console.log(ghuser.infoAsync())

    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <img src={require('../assets/images/github.svg')} className="ui centered small image" />
                <h1 className="ui grey inverted header">Hi!</h1>
                <div className="ui inverted transparent icon massive input">
                    <input type="text" placeholder="GitHub username..." />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>
    )
}

export default App;