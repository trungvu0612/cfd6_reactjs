import logo from './logo.svg';
import './App.css';
import HomePage from './page/home';
import Header from './component/Header';
import Footer from './component/Footer';
import Register from './page/register';
import Project from './page/project';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page404 from './page/page404';
import Team from './page/team';
import Course from './page/course';
import Contact from './page/contact';
import Profile from './page/profile';
import {Nav} from './component/'

function App() {
  return (
      <BrowserRouter>
       <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/team" component={Team}/>
          <Route path="/course" component={Course}/>
          <Route path="/project" component={Project}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/profile" component={Profile}/>
          <Route component={Page404}/>
        </Switch>
        <Footer/>
       </div>
      </BrowserRouter>
  );
}

export default App;
