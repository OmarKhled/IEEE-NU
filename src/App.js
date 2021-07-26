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
// Custom css stylesheet
import "./static/css/master.scss";
// Styled Compnents
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import themes from "./themes";
import About from "./components/pages/About";

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
          <div style={{ minHeight: "93vh", marginTop: "8.5rem" }}>
            <div className="px-5" style={{ maxWidth: "65.125rem", margin: "auto" }}>
              <Router>
                <Switch>
                  <Route path="/about-us">
                    <About />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </Router>
            </div>
            <ThemeToggeler toggle={toggle} onToggle={onToggle} />
          </div>
        </Fragment>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
