import React, {useEffect, useState} from 'react'
import OctoMenu from './OctoMenu'
import OctoMain from './OctoMain'

const OctoShow = () => {
    const [data, setData] = useState();

    var github = require('octonode');
    var client = github.client();

    useEffect(() => {
        var ghuser = client.user('timkinsman');
            ghuser.info(function(err, data, headers) {
            
            setData(data)
        })
    }, [])

    if(data){
        return (
            <>
                <OctoMenu data={data} />
                <OctoMain data={data} />
            </>
        )
    }

    return (
        <div className="ui active centered inline loader"></div>
    )
}

export default OctoShow;