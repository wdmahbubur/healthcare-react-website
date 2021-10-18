import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import SignIn from './components/Pages/SignIn/SignIn';


function App() {
  return (
    <div>
      <Router>
        <header className="sticky top-0 z-50">
          <Header></Header>
        </header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <SignIn></SignIn>
          </Route>
        </Switch>
        <footer>
          <Footer></Footer>
        </footer>
      </Router>
    </div>
  );
}

export default App;
