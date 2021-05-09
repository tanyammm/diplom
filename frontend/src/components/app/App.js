import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import reportWebVitals from "../../reportWebVitals";
import Header from "../header";
import Feedback from "../feedback";
import Footer from "../footer";
import PageOne from "../page-one";
import PageTwo from "../page-two";
import PageTree from "../page-three";
import PageFour from "../page-four";
import Authorization from "../authorization";
import Register from "../register";
import PageError from "../page-error";
import PageSearch from "../page-search";
import BackTopButton from "./back-top";
import "antd/dist/antd.css";

const App = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <div>
        <BrowserRouter>
          <Header />
          <Feedback />
          <Switch>
            <Route exact path="/library/" component={PageOne} />
            <Route exact path="/library/catalog" component={PageTwo} />
            <Route exact path="/library/services" component={PageTwo} />
            <Route exact path="/library/stocks" component={PageTwo} />
            <Route exact path="/library/donation" component={PageTwo} />
            <Route exact path="/library/books" component={PageTree} />
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
          <Footer />
          <BackTopButton />
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
};

reportWebVitals();
export default App;
