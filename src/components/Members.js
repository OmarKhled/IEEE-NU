import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import mustafa from '../static/images/Mohamed.png'
import omar from '../static/images/Omar.png'

const Members = () => {
    const members = [
        {
            image: mustafa,
            name: "Mohamed Mustafa",
            committee: 'Board',
            joined: "2018"
        },
        {
           image: omar,
           name: "Omar Khaled",
           committee: "Technical",
           joined: "2020"
        }
    ];
    return (
        <Fragment>
            <Row className="members p-5">
                <h1>Members</h1>
                <hr />
                {members.map(member => (
                    <Col xs="auto" className="pt-4">
                        <div className="member">
                            <div className="front">
                                <img width="150" height="230" src={member.image} alt={member.name} className="thumbnail" />
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
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
}

export default Members;