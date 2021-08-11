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
            <Route exact path="/diplom/" component={PageNews} />
            <Route exact path="/diplom/news/:id" component={PageMessage} />
            <Route exact path="/diplom/catalog" component={PageCatalog} />
            <Route
              exact
              path="/diplom/administrator"
              component={PageAdministrator}
            />
            <Route exact path="/diplom/account" component={PageAccount} />
            <Route exact path="/diplom/buy" component={PageBuy} />
            <Route exact path="/diplom/shopping" component={PageShopping} />
            <Route exact path="/diplom/donation" component={PageDonation} />
            <Route exact path="/diplom/centre" component={PageCentre} />
            <Route exact path="/diplom/services" component={PageServices} />
            <Route exact path="/diplom/student" component={PageStudent} />
            <Route exact path="/diplom/about" component={PageAbout} />
            <Route exact path="/diplom/books/:id" component={PageBook} />
            <Route
              exact
              path="/diplom/authorization"
              component={PageAuthorization}
            />
            <Route exact path="/diplom/register" component={PageRegister} />
            <Route exact path="/diplom/search" component={PageSearch} />
            <Route exact path="/diplom/documents" component={PageDocuments} />
            <Route exact path="/diplom/contacts" component={PageContacts} />
            <Route exact path="/diplom/list" component={PageList} />
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
