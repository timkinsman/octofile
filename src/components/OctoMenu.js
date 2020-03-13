import React from 'react';

const OctoMenu = ({data}) => {
    return (
        <div className="ui fixed center aligned segment">
            <div className="ui borderless icon menu" style={{background: '#1d1d1d'}}>
                <div className="ui container">
                    <a className="item">
                        <i className="arrow alternate circle left outline large icon" style={{color: '#bb86fc'}}></i>
                    </a>
                    <div className="right menu">
                        <a className="item" href="https://github.com/timkinsman/octofile.git" target="_blank">
                            <i className="github large icon" style={{color: '#bb86fc'}}></i>
                        </a>
                    </div>
                </div>
            </div>
            <img className="ui centered small circular image" src={data.avatar_url} alt="avatar_url" style={{border: '5px solid #bb86fc'}} />
            <h1 className="ui grey inverted header">
                {data.name}
                <div className="sub header" style={{color: '#bb86fc'}}>@{data.login}</div>
                <div className="sub header" style={{paddingTop: '20px'}}>{data.bio}</div>
            </h1>
        </div>
    )
}

export default OctoMenu;