import React, {useEffect, useState} from 'react'
import OctoInfo from './OctoInfo'
import OctoRepos from './OctoRepos'
import OctoSearch from './OctoSearch';

const OctoShow = ({term}) => {
    const [info, setInfo] = useState();
    const [repos, setRepos] = useState();
    const [err, setErr] = useState(false);

    var github = require('octonode');
    var client = github.client();

    useEffect(() => {
        var ghsearch = client.search();
        ghsearch.users({q: term}, function(err, data, headers) {
            if(data.total_count === 0){
                setErr(true);
            }else{
                var ghuser = client.user(data.items[0].login);
                ghuser.info(function(err, data, headers) {    
                    setInfo(data)
                })
                ghuser.repos(function(err, data, headers) {
                    setRepos(data)
                })
            }
        })
    }, [])

    if(err){
        console.log("AND WARNING")
        return (
            <>
                <OctoSearch msg="Oh no! Something went wrong. Try again!" />
            </>
        )
    }

    if(info && repos){
        return (
            <>
                <OctoInfo info={info} />
                <OctoRepos repos={repos} />
                <div style={{background: 'white'}}>
                    <div className="ui center aligned container">
                        <div className="ui horizontal small link list" style={{padding: '25px 0'}}>
                            <a className="item" href="https://reactjs.org/" target="_blank">React</a>
                            <a className="item" href="https://semantic-ui.com/" target="_blank">Semantic UI</a>
                            <a className="item" href="https://github.com/pksunkara/octonode" target="_blank">Octonode</a>
                            <a className="item" href="https://github.com/primer/octicons/" target="_blank">Octicons</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="ui active inverted huge text loader">Loading</div>
    )
}

export default OctoShow;