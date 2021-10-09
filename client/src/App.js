import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeToggeler from "./components/ThemeToggeler";
// Components
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpaceSummit from "./components/pages/SpaceSummit";
import AdminLogin from "./components/pages/Admin/AdminLogin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Membership from "./components/pages/Membership";
import Notfound from "./components/pages/Notfound";
import AdminDashboard from "./components/pages/Admin/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
// Custom css stylesheet
import "./static/css/master.scss";
// Styled Compnents
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import themes from "./themes";
import EditNews from "./components/pages/Admin/EditNews";
import AddNews from "./components/pages/Admin/AddNews";
import News from "./components/pages/News";
import AddEvent from "./components/pages/Admin/AddEvent";
import EditEvents from "./components/pages/Admin/EditEvents";
import EditMembers from "./components/pages/Admin/EditMembers";
import AddMember from "./components/pages/Admin/AddMember";
import SpaceSummitDetails from "./components/pages/SpaceSummitDetails";
import SpaceSummitAtendees from "./components/pages/Admin/SpaceSummitAtendees";
import VerficationForm from "./components/VerficationForm";
import TrackChanges from "./components/TrackChanges";
import EEDCompition from "./components/pages/EEDCompition";
import RegistrationBot from "./components/pages/RegistrationBot";
import ApplicantsData from "./components/pages/Admin/Bot/ApplicantsData";
import Applicant from "./components/pages/Admin/Bot/Applicant";
import RecruitmentForm from "./components/Bot/RecruitmentForm";
import Recruitment from "./components/pages/Recruitment";
import IEEEDay from "./components/pages/IEEEDay";

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

  useEffect(() => {
    const ele = document.getElementById("loading");
    if (ele) {
      ele.classList.add("available");
      setTimeout(() => {
        ele.outerHTML = "";
        document
          .querySelector('link[rel=stylesheet][href~="/styles/styles.css"]')
          .remove();
      }, 200);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={themeState === "light" ? themes.lightTheme : themes.darkTheme}
      >
        <GlobalStyles />
        <base target="_blank" />
        <Header onToggleTheme={onToggle} toggleTheme={toggle} />
        <Fragment>
          <div style={{ minHeight: "93vh", marginTop: "7rem", height: "1px" }}>
            <TrackChanges />
            <Switch>
              <Route path="/about-us" component={About} />
              <Route path="/eedCompetition" component={EEDCompition} />
              <AuthRoute path="/admin/login" component={AdminLogin} />
              <PrivateRoute
                path="/admin/dashboard"
                component={AdminDashboard}
              />
              <PrivateRoute
                path="/admin/spaceSummit/atendees"
                component={SpaceSummitAtendees}
              />
              <PrivateRoute path="/admin/edit/news/:id" component={EditNews} />
              <PrivateRoute
                path="/admin/edit/events/:id"
                component={EditEvents}
              />
              <PrivateRoute
                path="/admin/edit/members/:id"
                component={EditMembers}
              />
              <PrivateRoute path="/admin/add/news" component={AddNews} />
              <PrivateRoute path="/admin/add/events" component={AddEvent} />
              <PrivateRoute path="/admin/add/members" component={AddMember} />
              <PrivateRoute
                exact
                path="/admin/recruitment/applicants"
                component={ApplicantsData}
              />
              <PrivateRoute
                exact
                path="/admin/recruitment/applicants/:id"
                component={Applicant}
              />
              <Route path="/events" component={Events} />
              <Route
                exact
                path="/spaceSummit/:id"
                component={VerficationForm}
              />
              <Route exact path="/recruitmentForm" component={Recruitment} />
              <Route exact path="/IEEEDay" component={IEEEDay} />
              <Route exact path="/spaceSummit" component={SpaceSummit} />
              <Route exact path="/membership" component={Membership} />
              <Route exact path="/news" component={News} />
              <Route
                path="/competitionDetails"
                component={SpaceSummitDetails}
              />
              <Route exact path="/" component={Home} />
              <Route exact path="/bot" component={RegistrationBot} />
              <Route component={Notfound} />
            </Switch>
            <Footer />
            <ThemeToggeler toggle={toggle} onToggle={onToggle} />
          </div>
        </Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
