import React from 'react';

const OctoMain = ({data}) => {
    console.log(data)
    return (
        <div className="ui center aligned main text container" style={{fontSize: '1em'}}>
            <div className="ui three tiny statistics" style={{margin: '43px 0'}}>
                <div className="ui grey inverted statistic">
                    <div className="value">{data.public_repos}</div>
                    <div className="label">Repositories</div>
                </div>
                <div className="ui grey inverted statistic">
                    <div className="value">{data.followers}</div>
                    <div className="label">Followers</div>
                </div>
                <div className="ui grey inverted statistic">
                    <div className="value">{data.following}</div>
                    <div className="label">Following</div>
                </div>
            </div>
        </div>
    )
}

export default OctoMain;