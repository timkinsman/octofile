import React from 'react';

const OctoInfo = ({info}) => {
    console.log("info", info)
    return (
        <div>
            <div className="ui borderless icon secondary fluid menu" style={{background: '#121212'}}>
                    <a className="item">
                        <i className="arrow alternate circle left outline large icon" style={{color: '#bb86fc'}}></i>
                    </a>
                    <div className="right menu">
                        <a className="item" href="https://github.com/timkinsman/octofile.git" target="_blank">
                            <i className="github large icon" style={{color: '#bb86fc'}}></i>
                        </a>
                </div>
            </div>

            <div className="ui center aligned container">
                <img className="ui centered small circular image" src={info.avatar_url} alt="avatar_url" style={{border: '5px solid #bb86fc'}} />
                <h1 className="ui grey inverted header">
                    {info.name}
                    <a className="sub header" href={info.html_url} target="_blank" style={{color: '#bb86fc'}}>@{info.login}</a>
                    <div className="sub header" style={{margin: '24px 0 0 0'}}>{info.bio}</div>
                </h1>
            </div>

            <div className="ui center aligned main text container" style={{fontSize: '1em'}}>
                <div className="ui three tiny statistics" style={{margin: '43px 0'}}>
                    <div className="ui grey inverted statistic">
                        <div className="value">{info.public_repos}</div>
                        <div className="label">Repositories</div>
                    </div>
                    <div className="ui grey inverted statistic">
                        <div className="value">{info.followers}</div>
                        <div className="label">Followers</div>
                    </div>
                    <div className="ui grey inverted statistic">
                        <div className="value">{info.following}</div>
                        <div className="label">Following</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OctoInfo;