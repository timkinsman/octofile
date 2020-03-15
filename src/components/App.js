import React, {useState} from 'react';
import OctoSearch from './OctoSearch';
import OctoShow from './OctoShow';

const App = ({err}) => {
    const [term, setTerm] = useState()

    const onSearchSubmit = e => {
        setTerm(e)
    }

    if(term){
        return <OctoShow term={term} onClick={(() => setTerm(null))} />
    }

    return <OctoSearch msg={err === undefined ? "Hi!" : err} onSearchSubmit={onSearchSubmit} />
}

export default App;