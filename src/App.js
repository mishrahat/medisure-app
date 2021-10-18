import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Services from './components/Services/Services';
import Consultation from './components/Consultation/Consultation';
import Articles from './components/Articles/Articles';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/homeservices/:servicekey'>
          <ServiceDetails></ServiceDetails>
        </Route>
        <Route path='/consultation'>
          <Consultation></Consultation>
        </Route>
        <Route path='/articles'>
          <Articles></Articles>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
