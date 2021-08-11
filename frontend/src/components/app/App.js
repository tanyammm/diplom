import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import Header from "../header";
import Feedback from "../feedback";
import Footer from "../footer";
import PageAbout from "../pages/page-about";
import PageAdministrator from "../pages/page-administrator";
import PageNews from "../pages/page-news";
import PageCatalog from "../pages/page-catalog";
import PageBuy from "../pages/page-buy";
import PageShopping from "../pages/page-shopping";
import PageBook from "../pages/page-book";
import PageAuthorization from "../pages/page-authorization";
import PageAccount from "../pages/page-account";
import PageRegister from "../pages/page-register";
import PageError from "../pages/page-error";
import PageSearch from "../pages/page-search";
import PageDonation from "../pages/page-donation";
import PageCentre from "../pages/page-centre";
import PageStudent from "../pages/page-student";
import PageDocuments from "../pages/page-documents";
import PageContacts from "../pages/page-contacts";
import PageServices from "../pages/page-services";
import PageList from "../pages/page-list";
import PageMessage from "../pages/page-message";
import BackTopButton from "./back-top";
import ScrollToTop from "./scroll";
import css from "./style.module.css";

const App = () => {
  return (
    <ConfigProvider locale={ruRU} className={css}>
      <BrowserRouter>
        <div style={{ minHeight: "85vh" }}>
          <Header />
          <Feedback />
          <ScrollToTop />
          <Switch>
            <Route exact path="/library/" component={PageNews} />
            <Route exact path="/library/news/:id" component={PageMessage} />
            <Route exact path="/library/catalog" component={PageCatalog} />
            <Route
              exact
              path="/library/administrator"
              component={PageAdministrator}
            />
            <Route exact path="/library/account" component={PageAccount} />
            <Route exact path="/library/buy" component={PageBuy} />
            <Route exact path="/library/shopping" component={PageShopping} />
            <Route exact path="/library/donation" component={PageDonation} />
            <Route exact path="/library/centre" component={PageCentre} />
            <Route exact path="/library/services" component={PageServices} />
            <Route exact path="/library/student" component={PageStudent} />
            <Route exact path="/library/about" component={PageAbout} />
            <Route exact path="/library/books/:id" component={PageBook} />
            <Route
              exact
              path="/library/authorization"
              component={PageAuthorization}
            />
            <Route exact path="/library/register" component={PageRegister} />
            <Route exact path="/library/search" component={PageSearch} />
            <Route exact path="/library/documents" component={PageDocuments} />
            <Route exact path="/library/contacts" component={PageContacts} />
            <Route exact path="/library/list" component={PageList} />
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
