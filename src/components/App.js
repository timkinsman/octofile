import React, {useEffect, useState} from 'react';
import OctoSearch from './OctoSearch';
import OctoShow from './OctoShow';

const App = () => {
    const [term, setTerm] = useState()

    useEffect(() => {
        setTerm('timkinsman')
    },[])

    if(term){
        return <OctoShow term={term} />
    }

    return <OctoSearch />
}

export default App;