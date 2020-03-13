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

    console.log(data)

    if(data){
        return (
            <OctoMenu data={data} />
        )
    }

    return (
        <div>loading</div>
    )
}

export default OctoShow;