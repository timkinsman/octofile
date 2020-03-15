import React from 'react';
import Octicon, {Repo, PrimitiveDot, Star} from '@primer/octicons-react'
import colors from './colors/colors.json'

const OctoRepos = ({repos}) => {
    console.log("repos", repos)
    repos.sort((a,b) => (a.stargazers_count < b.stargazers_count) ? 1 : ((b.stargazers_count < a.stargazers_count) ? -1 : 0))
    return (
        <div style={{background: 'white', padding: '43px 0'}}>
        <div className="ui container">
            <h2 className="ui header">Top Languages</h2>
            <h2 className="ui header">Top Repos</h2>
            <div className="ui stackable grid" style={{height: 'auto'}}>
                {repos.slice(0, 8).map(el =>
                    <div className="four wide column" key={el.id}>
                        <div className="ui items">
                            <div className="item" style={{boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)", padding: '20px', margin: '0'}}>
                                <div className="content">
                                    <span style={{color: "rgba(0,0,0,.4)"}}>
                                        <Octicon icon={Repo} />
                                    </span>
                                    <a className="header" href={el.html_url} target="_blank" style={{margin: '0 0 0 10px'}}>{el.name.length > 20 ? `${el.name.slice(0, 20)}...` : el.name}</a>
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