import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import SignIn from './components/Pages/SignIn/SignIn';
import AuthProvider from './context/authProvider';


function App() {
  return (
    <div>
      <AuthProvider>
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
