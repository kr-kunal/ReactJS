import React, { useContext } from 'react'
import { ProfileContext } from './UseContext';
import Team from './Team';


const User = () => {
    const context = useContext(ProfileContext);
    return (
        <div>
            <img src={context.userImage} width="138px" alt="" />
            <p>{context.fullName}</p>
            <Team />
        </div>
    )
}

export default User