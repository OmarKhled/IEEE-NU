import React, { Fragment, useState } from 'react'
// Semantic UI 
import 'semantic-ui-css/semantic.min.css';
// Styled components imports
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../GlobalStyle'
import themes from '../../themes'
// Components
import Members from '../Members'
import Carousel from '../Carousel'
import NewsContainer from '../NewsContainer'
import ThemeToggeler from '../ThemeToggeler'
// CSS Stylesheet
import '../../static/css/master.scss'

const Home = () => {
    return (
        <Fragment>
                <div className="px-5" style={{maxWidth: '65.125rem', margin: 'auto'}}>
                    <Carousel />
                    <NewsContainer/>
                    <Members />
                </div>
        </Fragment>
    )
}

export default Home