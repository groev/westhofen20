import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Container, Chat, Portfolio, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/chat/:slug/:status" component={Chat} />
            <Route path="/chat/:slug/" component={Chat} />

            <Chat />
          </Switch>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
