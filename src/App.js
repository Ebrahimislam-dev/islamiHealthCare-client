import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Appointments from './components/appointments/Appointments';
import Booking from './components/Booking/Booking/Booking';
import Contactus from './components/contact/Contactus';
import Doctors from './components/doctors/Doctors';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import NotFound from './components/notFound/NotFound';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contactus></Contactus>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/appointments">
              <Appointments></Appointments>
            </PrivateRoute>
            <PrivateRoute path="/booking/:servicesId">
              <Booking></Booking>
            </PrivateRoute>



            <Route path="/*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
