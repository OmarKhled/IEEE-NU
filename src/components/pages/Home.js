import React, { Fragment } from 'react'
// Semantic UI 
import 'semantic-ui-css/semantic.min.css';
// Components
import Members from '../Members'
import Carousel from '../Carousel'
import NewsContainer from '../NewsContainer'
import Character from '../Character';
import EventsContainer from '../EventsContainer';
import PastParteners from '../PastParteners';
import NewsletterMessage from '../NewsletterMessage';
// CSS Stylesheet
import '../../static/css/master.scss'

const Home = () => {
    return (
        <Fragment>
                <div className="px-5" style={{maxWidth: '65.125rem', margin: 'auto'}}>
                    <Carousel />
                    <NewsContainer/>
                    <EventsContainer/>
                    <Members />
                    <PastParteners />
                    <Character />
                    <NewsletterMessage />
                </div>
        </Fragment>
    )
}

export default Home