import React, {useState} from 'react';

const OctoSearch = ({msg, onSearchSubmit}) => {
    const [term, setTerm] = useState()

    const onSubmit = e => {
        e.preventDefault();
        onSearchSubmit(term);
    }

    return (
            <div style={{background: '#121212', height:'100vh'}}>
                <div style={{textAlign: 'center', padding: '20vh 0 0 0'}}>
                    <img src={require('../assets/images/github.svg')} className="ui centered small image" alt="logo" />
                    <h1 className="ui grey inverted header">{msg}</h1>
                    <form onSubmit={onSubmit}>
                        <div className="ui inverted transparent icon massive input">
                            <input 
                                type="text"
                                placeholder="GitHub username..."
                                onChange={e => setTerm(e.target.value)}
                            />
                            <i className="search icon"></i>
                        </div>
                    </form>
                </div>
            </div>
        
    )
}

export default OctoSearch;