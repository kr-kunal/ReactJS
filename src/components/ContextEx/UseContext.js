import React, { useContext } from 'react'
import User from './User';

export const ProfileContext = React.createContext({
    company: 'Knackroot',
    companyImage: 'https://knackroot.com/wp-content/uploads/2019/07/logo.png',
    url: 'https://knackroot.com',
    userImage: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg',
    fullName: 'Kunal Patel',
    team: 'Team React'
});

function UseContext() {
    const context = useContext(ProfileContext);
    return (
        <div>
            <a href={context.url}>
                <img src={context.companyImage} alt="profile" />
            </a>
            <User />
        </div>
    )
}

export default UseContext