import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './components/pages/Home';
// Semantic UI css file
import './static/css/master.scss'
import Header from './components/Header'
import ChangeNavbar from './components/change-navbar'

function App() {
  return (
    <BrowserRouter>
    <ChangeNavbar/>
      <Header/>
    <Fragment>
      <div style={{minHeight: '93vh', marginTop: '85px'}} >
          
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;