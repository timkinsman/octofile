import React from 'react';

const OctoDisplay = () => {
    var github = require('octonode');
    var client = github.client();

    var ghuser = client.user('pksunkara');
    ghuser.info(function(err, data, headers) {
        console.log("error: " + JSON.stringify(err));
        console.log("data: " + JSON.stringify(data));
        console.log("headers:" + JSON.stringify(headers));
    })

    return (
        <div className="ui inverted vertical masthead center aligned segment">
            <img className="ui centered medium circular image" src="/" alt="img" />
        </div>
    )
}

export default OctoDisplay;