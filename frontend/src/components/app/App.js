import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import Header from "../header";
import Feedback from "../feedback";
import Footer from "../footer";
import PageNews from "../pages/page-news";
import PageCatalog from "../pages/page-catalog";
import PageFour from "../pages/page-four";
import Authorization from "../authorization";
import Register from "../register";
import PageError from "../page-error";
import PageDevelopment from "../pages/page-development";
import PageSearch from "../pages/page-search";
import PageDonation from "../pages/page-donation";
import BackTopButton from "./back-top";
import "antd/dist/antd.css";

const App = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <BrowserRouter>
        <div style={{ minHeight: "85vh" }}>
          <Header />
          <Feedback />
          <Switch>
            <Route exact path="/library/" component={PageNews} />
            <Route exact path="/library/catalog" component={PageCatalog} />
            <Route exact path="/library/services" component={PageDevelopment} />
            <Route exact path="/library/stocks" component={PageDevelopment} />
            <Route exact path="/library/donation" component={PageDonation} />
            <Route exact path="/library/book" component={PageFour} />
            <Route
              exact
              path="/library/authorization"
              component={Authorization}
            />
            <Route exact path="/library/register" component={Register} />
            <Route exact path="/library/search" component={PageSearch} />{" "}
            <Route
              exact
              path="/library/development"
              component={PageDevelopment}
            />
            <Route exact path="*" component={PageError} />
          </Switch>
        </div>
        <Footer />
        <BackTopButton />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
