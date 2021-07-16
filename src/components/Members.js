import React, { Fragment } from 'react';
import Member from './Member'
import {Row , Col} from 'reactstrap'
import mustafa from '../static/images/Members/Mohamed.png'
import omar from '../static/images/Members/Omar.png'
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
    },
    {
        image: mustafa,
        name: "Mohamed Mustafa",
        committee: 'Board',
        joined: "2018"
    },
    
];
const Members = (props) => {
    return (
        <Fragment>
            <div className="mt-5">
                <h2>Members</h2>
                <hr />
            </div>
            <div className="members p-5">
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