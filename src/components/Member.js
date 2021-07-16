import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Member = ({ member }) => {
    return (
        <div className="member mt-1">
            <div className="front">
                <div className="aspect-ratio-box">
                    <div className="const-aspect-ratio">
                        <img width="150" height="230" src={member.image} alt={member.name}className="thumbnail" />
                    </div>
                </div>
                <h5 className="name">{member.name}</h5>
            </div>
            <div className="info">
                <p className="muted">Committee: {member.committee}</p>
                <div className="my-2">
                    <h6>Joined</h6>
                    <span>{member.joined}</span>
                </div>
                <div className="columns">
                    <div className="i">
                        <FaFacebook href="facebook.com" />
                    </div>
                    <div className="i">
                        <FaLinkedin href="facebook.com"/>
                    </div>
                </div>
            </div>
            <div className="back">
                
            </div>
        </div>
    )
}

export default Member
