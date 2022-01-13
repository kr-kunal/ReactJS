import React, { useContext } from 'react'
import { ProfileContext } from './UseContext';

const Team = () => {
    const context = useContext(ProfileContext);
    return (
        <div>
            <h5>( {context.team} )</h5>
        </div>
    )
}

export default Team