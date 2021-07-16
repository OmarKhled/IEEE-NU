import { Fragment, useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeToggeler from './components/ThemeToggeler';
// Components
import Home from './components/pages/Home';
import Header from './components/Header'
import ChangeNavbar from './components/change-navbar'
import Footer from './components/Footer'
// Custom css stylesheet
import './static/css/master.scss'
// Styled Compnents
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyle';
import themes from './themes';

function App() {
  const [themeState, setTheme] = useState('light')
  const [toggle, setToggle] = useState(false)
  // Theme Toggler switch
  const toggleTheme = () => themeState === 'light' ? setTheme('dark') : setTheme('light')
  const onToggle = () => {
      setToggle(!toggle)
      toggleTheme()
  }
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeState === 'light' ? themes.lightTheme : themes.darkTheme}>
        <GlobalStyles />
        <ChangeNavbar/>
        <base target="_blank"/>
          <Header onToggleTheme={onToggle} toggleTheme={toggle}/>
        <Fragment>
          <div style={{minHeight: '93vh', marginTop: '8.5rem'}} >
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
            <ThemeToggeler toggle={toggle} onToggle={onToggle} />
          </div>
        </Fragment>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;