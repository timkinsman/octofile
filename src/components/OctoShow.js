import React, {useEffect, useState} from 'react'
import OctoInfo from './OctoInfo'
import OctoRepos from './OctoRepos'

const OctoShow = () => {
    const [info, setInfo] = useState();
    const [repos, setRepos] = useState();

    var github = require('octonode');
    var client = github.client();

    useEffect(() => {
        var ghuser = client.user('timkinsman');
        ghuser.info(function(err, data, headers) {    
            setInfo(data)
        })
        ghuser.repos(function(err, data, headers) {
            setRepos(data)
        })
    }, [])

    if(info && repos){
        return (
            <>
                <OctoInfo info={info} />
                <OctoRepos repos={repos} />
            </>
        )
    }

    return (
        <div class="ui active inverted huge text loader">Loading</div>
    )
}

export default OctoShow;