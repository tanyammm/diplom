import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import Header from "../header";
import Feedback from "../feedback";
import Footer from "../footer";
import PageNews from "../pages/page-news";
import PageCatalog from "../pages/page-catalog";
import PageBuy from "../pages/page-buy";
import PageBook from "../pages/page-book";
import Authorization from "../authorization";
import Register from "../register";
import PageError from "../page-error";
import PageSearch from "../pages/page-search";
import PageDonation from "../pages/page-donation";
import PageAbout from "../pages/page-about";
import PageCentre from "../pages/page-centre";
import PageEducational from "../pages/page-educational";
import PageDocuments from "../pages/page-documents";
import PageContacts from "../pages/page-contacts";
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
            <Route exact path="/library/buy" component={PageBuy} />
            <Route exact path="/library/donation" component={PageDonation} />
            <Route exact path="/library/centre" component={PageCentre} />
            <Route
              exact
              path="/library/educational"
              component={PageEducational}
            />
            <Route exact path="/library/about" component={PageAbout} />
            <Route exact path="/library/book" component={PageBook} />
            <Route
              exact
              path="/library/authorization"
              component={Authorization}
            />
            <Route exact path="/library/register" component={Register} />
            <Route exact path="/library/search" component={PageSearch} />
            <Route exact path="/library/documents" component={PageDocuments} />
            <Route exact path="/library/contacts" component={PageContacts} />
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
