import React from 'react';
import OctoSearch from './OctoSearch';

const App = () => {
    var github = require('octonode');
    var client = github.client();

    var ghuser = client.user('timkinsman');
    console.log(ghuser.infoAsync())

    return (
        <OctoSearch />
    )
}

export default App;