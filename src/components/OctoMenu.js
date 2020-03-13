import React from 'react';

const OctoMenu = ({data}) => {
    return (
        <>
            <div className="ui borderless icon secondary menu" style={{background: '#121212'}}>
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
                <img className="ui centered small circular image" src={data.avatar_url} alt="avatar_url" style={{border: '5px solid #bb86fc'}} />
                <h1 className="ui grey inverted header">
                    {data.name}
                    <div className="sub header" style={{color: '#bb86fc'}}>@{data.login}</div>
                    <div className="sub header" style={{padding: '24px 0 0 0'}}>{data.bio}</div>
                </h1>
                <button className="ui inverted button">Follow</button>
            </div>
        </>
    )
}

export default OctoMenu;