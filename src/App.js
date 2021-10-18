import './App.css';
import Header from './compotents/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './compotents/Pages/Home/Home';
import Footer from './compotents/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <header>
          <Header></Header>
        </header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
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
