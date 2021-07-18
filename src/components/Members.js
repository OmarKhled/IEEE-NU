import React, { Fragment } from 'react';
import Member from './Member'
import {Row , Col} from 'reactstrap'
import mustafa from '../static/images/Members/Mohamed.png'
import omar from '../static/images/Members/Omar.png'
const members = [
    {
        image: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg',
        name: "David mark",
        committee: 'Board',
        joined: "2018"
    },
    {
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
        name: "Sara locke",
        committee: "Technical",
        joined: "2020"
    },
    {
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
        name: "Mike kayle",
        committee: 'Operations',
        joined: "2018"
    },
    
];
const Members = () => {
    return (
        <Fragment>
            <div className="mt-3">
                <h2>Members</h2>
                <hr />
            </div>
            <div className="pb-5">
                <Row>
                    {members.map((member, index) => (
                        <Col key={index} xs="12" sm="6" lg="4">
                            <Member member={member} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Fragment>
    );
}

export default Members;