import React, { Suspense, lazy } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "../src/components/main.css";

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./page/Home/Home")), 500);
  });
});
const SingleCocktail = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./components/SingleItem/SingleItem")),
      500
    );
  });
});
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cocktail/:id" component={SingleCocktail} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
