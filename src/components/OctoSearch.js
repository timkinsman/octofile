import React, {useState} from 'react';

const OctoSearch = ({msg, onSearchSubmit}) => {
    const [term, setTerm] = useState()

    const onSubmit = e => {
        e.preventDefault();
        onSearchSubmit(term);
    }

    return (
            <div style={{background: '#121212', height:'100vh', display: 'flex'}}>
                <div style={{textAlign: 'center', alignSelf: 'center', flex: 'auto'}}>
                    <img src={require('../assets/images/github.svg')} className="ui centered small image" alt="logo" />
                    <h1 className="ui grey inverted header" style={{margin: '14px 0'}}>{msg}</h1>
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