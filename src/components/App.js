import React, {useEffect, useState} from 'react';
import OctoSearch from './OctoSearch';
import OctoShow from './OctoShow';

const App = () => {
    const [term, setTerm] = useState()

    useEffect(() => {
        setTerm('jmperez')
    },[])

    if(term){
        return <OctoShow term={term} onClick={(() => setTerm(null))} />
    }

    return <OctoSearch msg="Hi!" />
}

export default App;