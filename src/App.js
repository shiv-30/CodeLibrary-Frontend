import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import EngTrack from './EngineeringTrack/EngTrack';
import FirstYear from './EngineeringTrack/TrackCard/Components/FirstYear/FirstYear';
import SecondYear from './EngineeringTrack/TrackCard/Components/SecondYear/SecondYear';
import ThirdYear from './EngineeringTrack/TrackCard/Components/ThirdYear/ThirdYear';
import FourthYear from './EngineeringTrack/TrackCard/Components/FourthYear/FourthYear';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/engtrack' component={EngTrack} />
        <Route exact path='/engtrack/firstyear' component={FirstYear} />
        <Route exact path='/engtrack/secondyear' component={SecondYear} />
        <Route exact path='/engtrack/thirdyear' component={ThirdYear} />
        <Route exact path='/engtrack/fourthyear' component={FourthYear} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/services' component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
