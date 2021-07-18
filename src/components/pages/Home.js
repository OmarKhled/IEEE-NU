import React, { Fragment } from 'react'
// Semantic UI 
import 'semantic-ui-css/semantic.min.css';
// Components
import Members from '../Members'
import Carousel from '../Carousel'
import NewsContainer from '../NewsContainer'
<<<<<<< HEAD
import EventsContainer from '../EventsContainer';
=======
import PastParteners from '../PastParteners';
>>>>>>> 0169b4baa6b7ffb41998394382a320ae81c56b36
// CSS Stylesheet
import '../../static/css/master.scss'

const Home = () => {
    return (
        <Fragment>
                <div className="px-5" style={{maxWidth: '65.125rem', margin: 'auto'}}>
                    <Carousel />
                    <NewsContainer/>
                    <Members />
<<<<<<< HEAD
                    <EventsContainer/>
=======
                    <PastParteners />
>>>>>>> 0169b4baa6b7ffb41998394382a320ae81c56b36
                </div>
        </Fragment>
    )
}

export default Home