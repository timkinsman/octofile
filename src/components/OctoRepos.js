import React from 'react';
import Octicon, {Repo, PrimitiveDot, Star} from '@primer/octicons-react'
import colors from './colors/colors.json'
import {Doughnut} from 'react-chartjs-2'

const OctoRepos = ({repos}) => {
    repos.sort((a,b) => (a.stargazers_count < b.stargazers_count) ? 1 : ((b.stargazers_count < a.stargazers_count) ? -1 : 0))
    var res = {}
    repos.forEach(v => {res[v.language] = (res[v.language] || 0) + 1})
    const data = {
        datasets: [{
            data: Object.values(res),
            backgroundColor: Object.keys(res).map(el => colors[el])
        }],
        labels: Object.keys(res)
    }

    return (
        <div style={{background: 'white', padding: '43px 0'}}>
        <div className="ui container">
            <h2 className="ui dividing header" style={{textAlign: 'center'}}>Top Languages</h2>
            <Doughnut data={data} />
            <h2 className="ui dividing header" style={{textAlign: 'center', padding: '43px 0 3px 0'}}>Top Repositories</h2>
            <div className="ui stackable grid" style={{height: 'auto'}}>
                {repos.slice(0, 8).map(el =>
                    <div className="four wide column" key={el.id}>
                        <div className="ui items">
                            <div className="item" style={{boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)", padding: '20px', margin: '0'}}>
                                <div className="content">
                                    <span style={{color: "rgba(0,0,0,.4)"}}>
                                        <Octicon icon={Repo} />
                                    </span>
                                    <a className="header" href={el.html_url} target="_blank" rel="noopener noreferrer" style={{margin: '0 0 0 10px'}}>{el.name.length > 20 ? `${el.name.slice(0, 20)}...` : el.name}</a>
                                    <div className="meta" style={{height: '40px'}}>
                                        <span>{el.description === null ? null : el.description.length > 50 ? `${el.description.slice(0, 50)}...` : el.description}</span>
                                    </div>
                                    <div className="extra">
                                        <span style={{color: colors[el.language], float: 'left'}}>
                                            <Octicon icon={PrimitiveDot} /> <span style={{color:'rgba(0,0,0,0.4)'}}>{el.language}</span>
                                        </span>
                                        
                                        <span></span>
                                        <span style={{color: "rgba(0,0,0,.4)", float: 'right'}}>
                                            <Octicon icon={Star} /> {el.stargazers_count}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    )
}

export default OctoRepos;