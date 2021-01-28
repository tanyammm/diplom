import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider, BackTop } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import { ArrowUpOutlined } from "@ant-design/icons";
import reportWebVitals from "../../reportWebVitals";
import Header from "../header";
import Footer from "../footer";
import PageOne from "../pageOne";
import PageTwo from "../pageTwo";
import PageTree from "../pageThree";
import PageFour from "../pageFour";
import Authorization from "../authorization";
import Register from "../register";
import ErrorHandling from "../errorHandling";
import PageSearch from "../pageSearch";
import "antd/dist/antd.css";
import css from "./App.module.css";

const App = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <div className={css.App}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/library/" component={PageOne} />
            <Route exact path="/library/catalog" component={PageTwo} />
            <Route exact path="/library/books" component={PageTree} />
            <Route exact path="/library/book" component={PageFour} />
            <Route
              exact
              path="/library/authorization"
              component={Authorization}
            />
            <Route exact path="/library/register" component={Register} />
            <Route exact path="/library/search" component={PageSearch} />
            <Route exact path="*" component={ErrorHandling} />
          </Switch>
          <Footer />
        </BrowserRouter>
        <BackTop>
          <div className={css.button}>
            <ArrowUpOutlined />
          </div>
        </BackTop>
      </div>
    </ConfigProvider>
  );
};

reportWebVitals();
export default App;
