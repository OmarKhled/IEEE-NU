import { useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";

const ChangeNavbar = (props) => {
  const location = useLocation();
  useEffect(() => {
    function onScrollChangeNavbar() {
      if (window.scrollY > 0) {
        if (!document.querySelector(".navbar").classList.contains("m-0")) {
          document.querySelector(".navbar").className +=
            " m-0 changeBackground";
          document.querySelector(".navbar").classList.remove("dark");
          document.querySelector("header").style.opacity = 0;
          document.querySelector("header").style.transform =
            "translateY(-1rem)";
        }
      } else {
        document.querySelector(".navbar").classList.remove("m-0");
        document.querySelector("header").style.opacity = 1;
        document.querySelector("header").style.transform = "translateY(0)";
        if (!document.querySelector(".navbar").classList.contains("dark")) {
        }
      }
    }
    onScrollChangeNavbar();
    window.addEventListener("scroll", onScrollChangeNavbar);
  }, [location.pathname]);

  return null;
};

export default withRouter(ChangeNavbar);
