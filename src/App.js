import { Fragment, useState } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ThemeToggeler from "./components/ThemeToggeler";
// Components
import Home from "./components/pages/Home";
import Header from "./components/Header";
import ChangeNavbar from "./components/change-navbar";
import Footer from "./components/Footer";
import SpaceSummit from "./components/pages/SpaceSummit";
import EmailLetter from "./components/EmailLetter";
// Custom css stylesheet
import "./static/css/master.scss";
// Styled Compnents
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import themes from "./themes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Membership from "./components/pages/Membership";
import Notfound from "./components/pages/Notfound";

function App() {
  const [themeState, setTheme] = useState(localStorage.getItem("theme"));
  if (themeState == null) {
    localStorage.setItem("theme", "light");
    setTheme(localStorage.getItem("theme"));
  } else {
    localStorage.setItem("theme", themeState);
  }
  const [toggle, setToggle] = useState(false);
  // Theme Toggler switch
  const toggleTheme = () =>
    themeState === "light" ? setTheme("dark") : setTheme("light");
  const onToggle = () => {
    setToggle(!toggle);
    toggleTheme();
    localStorage.setItem("theme", themeState);
  };

  return (
    <BrowserRouter forceRefresh>
      <ThemeProvider
        theme={themeState === "light" ? themes.lightTheme : themes.darkTheme}
      >
        <GlobalStyles />
        <ChangeNavbar />
        <base target="_blank" />
        <Header onToggleTheme={onToggle} toggleTheme={toggle} />
        <Fragment>
          <div
            style={{ minHeight: "93vh", marginTop: "8.5rem", height: "1px" }}
          >
            <EmailLetter />
            <Router>
              <Switch>
                <Route path="/about-us">
                  <About />
                </Route>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/spaceSummit">
                  <SpaceSummit />
                </Route>
                <Route path="/membership">
                  <Membership />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/">
                  <Notfound />
                </Route>
              </Switch>
              <Footer />
            </Router>
            <ThemeToggeler toggle={toggle} onToggle={onToggle} />
          </div>
        </Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
