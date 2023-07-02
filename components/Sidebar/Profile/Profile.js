import React from 'react'

import Image from 'next/image'

function Profile(props) {
    return (
        <div className="profile-container">
            <Image src='/images/developer.png' width={100} height={100} alt="logo" />
            <h1 className="name">{props.name}</h1>
            <h3 className="tagline">{props.tagline}</h3>
        </div>
    )
}

export default Profile