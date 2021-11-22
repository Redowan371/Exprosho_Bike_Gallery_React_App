import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvaider from "./contexts/AuthProvaider/AuthProvaider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/Home/About/About";
import Menubar from "./Pages/Sheared/Menubar/Menubar";
import Footer from "./Pages/Sheared/Footer/Footer";
import ProductsMain from "./Pages/Home/ProductsMain/ProductsMain";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Contact from "./Pages/Home/Contatact/Contact";
import Congratulation from "./Pages/Home/Congratulation/Congratulation";

function App() {
  return (
    <div className="App">
      <AuthProvaider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <Menubar />
              <About />
              <Footer />
            </Route>
            <Route path="/products">
              <Menubar />
              <ProductsMain />
              <Footer />
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <Menubar />
              <PlaceOrder />
              <Footer />
            </PrivateRoute>
            <Route exact path="/congratulation">
              <Congratulation />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvaider>
    </div>
  );
}

export default App;
