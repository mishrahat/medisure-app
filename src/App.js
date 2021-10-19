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
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRouter';

function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path='/homeservices/:servicename'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path='/consultation'>
            <Consultation></Consultation>
          </PrivateRoute>
          <PrivateRoute path='/articles'>
            <Articles></Articles>
          </PrivateRoute>
          <Route path='/registration'>
            <Registration></Registration>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
