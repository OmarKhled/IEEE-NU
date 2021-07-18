import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Card } from 'semantic-ui-react'

const Member = ({ member }) => {
     return (
        <div className="member-container mt-3">
            <img src={member.image} alt={member.name} className="circle"/>
                <Card>
                    <Card.Content>
                        <Card.Header>{member.name}</Card.Header>
                        <Card.Meta>{member.committee}</Card.Meta>
                        <Card.Description>
                        <div className="des">
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
                        </Card.Description>
                    </Card.Content>
                </Card>
        </div>
    )
}

export default Member