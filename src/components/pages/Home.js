import React, { Fragment } from 'react'
// Semantic UI 
import 'semantic-ui-css/semantic.min.css';
// Components
import Members from '../Members'
import Carousel from '../Carousel'
import NewsContainer from '../NewsContainer'
import PastParteners from '../PastParteners';
// CSS Stylesheet
import '../../static/css/master.scss'

const Home = () => {
    return (
        <Fragment>
                <div className="px-5" style={{maxWidth: '65.125rem', margin: 'auto'}}>
                    <Carousel />
                    <NewsContainer/>
                    <Members />
                    <PastParteners />
                </div>
        </Fragment>
    )
}

export default Home