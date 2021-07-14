import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Fragment } from 'react'
import Nav from './components/Navbar'
import Home from './components/pages/Home'
// Semantic UI css file
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Fragment>
      <Nav /> 
      <div style={{minHeight: '93vh'}} className="p-3">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
