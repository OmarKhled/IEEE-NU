import React, { Fragment, useState, useEffect } from 'react'
// Semantic UI 
import 'semantic-ui-css/semantic.min.css';
// Components
import Members from '../Members'
import Carousel from '../Carousel'
import NewsContainer from '../NewsContainer'
import EventsContainer from '../EventsContainer';
import PastParteners from '../PastParteners';
import NewsletterPop from '../NewsletterPop';
// CSS Stylesheet
import '../../static/css/master.scss'

import { isMobile, mobileModel } from 'react-device-detect'

const Home = () => {
    const [reveal, setReveal] = useState('reveal')
    if (localStorage.getItem('revealPop') !== 'off') {
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && reveal == '') {
                setReveal('reveal')
            }
        };
    }
    const remove = () => {
        setReveal('')
    }
    return (
        <Fragment>
                <div className="px-5" style={{maxWidth: '65.125rem', margin: 'auto'}}>
                    <Carousel />
                    <NewsContainer/>
                    <EventsContainer/>
                    <Members />
                    <PastParteners />
                    <NewsletterPop className={`${reveal} ${isMobile? 'mobile' : ''}`} remove={remove} />
                </div>
        </Fragment>
    )
}

export default Home