import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import reportWebVitals from "../../reportWebVitals";
import Header from "../header";
import Feedback from "../feedback";
import Footer from "../footer";
import PageNews from "../pages/page-news";
import PageCatalog from "../pages/page-catalog";
import PageFour from "../pages/page-four";
import Authorization from "../authorization";
import Register from "../register";
import PageError from "../page-error";
import PageSearch from "../pages/page-search";
import BackTopButton from "./back-top";
import "antd/dist/antd.css";

const App = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <BrowserRouter>
        <div style={{ minHeight: "90vh" }}>
          <Header />
          <Feedback />
          <Switch>
            <Route exact path="/library/" component={PageNews} />
            <Route exact path="/library/catalog" component={PageCatalog} />
            <Route exact path="/library/services" component={PageCatalog} />
            <Route exact path="/library/stocks" component={PageCatalog} />
            <Route exact path="/library/donation" component={PageCatalog} />
            <Route exact path="/library/book" component={PageFour} />
            <Route
              exact
              path="/library/authorization"
              component={Authorization}
            />
            <Route exact path="/library/register" component={Register} />
            <Route exact path="/library/search" component={PageSearch} />
            <Route exact path="*" component={PageError} />
          </Switch>
        </div>
        <Footer />
        <BackTopButton />
      </BrowserRouter>
    </ConfigProvider>
  );
};

reportWebVitals();
export default App;
