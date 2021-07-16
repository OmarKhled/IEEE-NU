import React from 'react'
import { useState } from 'react'
// Styled components imports
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../GlobalStyle'
import themes from '../../themes'
// Components
import Members from '../Members'
import Carousel from '../Carousel'
import ThemeToggeler from '../ThemeToggeler'
// CSS Stylesheet
import '../../static/css/master.scss'

const Home = () => {
    // App states
    const [themeState, setTheme] = useState('light')
    const [toggle, setToggle] = useState(false)
    // Theme Toggler switch
    const onToggle = () => {
        setToggle(!toggle)
        toggleTheme()
    }
    const toggleTheme = () => themeState === 'light' ? setTheme('dark') : setTheme('light')

    return (
        <ThemeProvider theme={themeState === 'light' ? themes.lightTheme : themes.darkTheme}>
            <GlobalStyles />
            <div style={{maxWidth: '53.125rem', margin: 'auto'}}>
                <Carousel />
                <Members />
                <div>

                </div>
                <ThemeToggeler toggle={toggle} onToggle={onToggle}/>
            </div>
        </ThemeProvider>
    )
}

export default Home