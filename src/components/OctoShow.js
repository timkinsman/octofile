import React, {useEffect, useState} from 'react'
import OctoInfo from './OctoInfo'
import OctoRepos from './OctoRepos'
import App from './App';

const OctoShow = ({term, onClick}) => {
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
                ghuser.repos({per_page: 100}, function(err, data, headers) {
                    setRepos(data)
                })
            }
        })
    }, [])

    if(err){
        return <App err="User not found!" />
    }

    if(info && repos){
        const renderRepos = () => {
            if(repos.length === 0){
                return (
                    <div className="ui center aligned column" style={{background: 'white', padding: '43px 0 86px 0'}}>
                        <h3 className="ui header" style={{textAlign: 'center'}}>Only procrastinators can see this message.</h3>
                    </div>
                )
            }
            return <OctoRepos repos={repos} />
        }
        return (
            <div>
                <OctoInfo info={info} onClick={onClick} />
                {renderRepos()}
                <div style={{background: 'white'}}>
                    <div className="ui center aligned container">
                        <div className="ui horizontal small link list" style={{padding: '25px 0'}}>
                            <a className="item" href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a>
                            <a className="item" href="https://semantic-ui.com/" target="_blank" rel="noopener noreferrer">Semantic UI</a>
                            <a className="item" href="https://github.com/pksunkara/octonode" target="_blank" rel="noopener noreferrer">octonode</a>
                            <a className="item" href="https://github.com/primer/octicons/" target="_blank" rel="noopener noreferrer">octicons</a>
                            <a className="item" href="https://github.com/doda/github-language-colors" target="_blank" rel="noopener noreferrer">github-language-colors</a>
                            <a className="item" href="https://github.com/jerairrest/react-chartjs-2" target="_blank" rel="noopener noreferrer">react-chartjs-2</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{background: '#121212', height: '100vh'}}>
            <div className="ui active inverted huge text loader">Loading</div>
        </div>
    )
}

export default OctoShow;