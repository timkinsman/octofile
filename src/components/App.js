import React from 'react';

const App = () => {
    var github = require('octonode');
    var client = github.client();

    var ghuser = client.user('timkinsman');
    console.log(ghuser)

    return <div>App</div>
}

export default App;