import React from 'react';
import Octicon, {Repo, PrimitiveDot} from '@primer/octicons-react'
import colors from './colors/colors.json'

const OctoRepos = ({repos}) => {
    console.log(repos)
    return (
        <div className="ui container">
            <h2 className="ui inverted grey header">Top Languages</h2>
            <h2 className="ui inverted grey header">Top Repos</h2>
            <div className="ui stackable grid" style={{height: 'auto'}}>
                {repos.slice(0, 8).map(el =>
                    <div className="four wide column" key={el.id}>
                        <div className="ui items">
                            <div className="item" style={{background: '#1d1d1d', padding: '20px', borderRadius: '5px', margin: '0'}}>
                                <div className="content">
                                    <span>
                                        <Octicon icon={Repo} />
                                    </span>
                                    <h1 className="header" style={{margin: '0 0 0 10px'}}>{el.name}</h1>
                                    <div className="meta" style={{height: '40px'}}>
                                        <span>{el.description}</span>
                                    </div>
                                    <div className="extra">
                                        <span style={{color: colors[el.language]}}>
                                            <Octicon icon={PrimitiveDot} />
                                        </span>
                                        {el.language}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OctoRepos;