import React from 'react';

const OctoDisplay = () => {
    var github = require('octonode');
    var client = github.client();

    var ghuser = client.user('timkinsman');
    console.log(ghuser)

    return (
        <div>OctoDisplay</div>
    )
}

export default OctoDisplay;