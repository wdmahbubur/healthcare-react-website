import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import SignIn from './components/Pages/SignIn/SignIn';
import AuthProvider from './context/authProvider';
import ServiceDetails from './components/Pages/ServiceDetails/ServiceDetails';

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import NotFound from './components/Pages/NotFound/NotFound';
import Appointment from './components/Pages/Appoinment/Appoinment';
import Dashboard from './components/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      {/* Context Api */}
      <AuthProvider>
        {/* Route */}
        <Router>
          <header className="sticky top-0 z-50">
            <Header></Header>
          </header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path="/service/:sid">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <footer>
            <Footer></Footer>
          </footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
