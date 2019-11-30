import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Menu from './components/Navbar/Menu';
import Home from './pages/Home';
import Default from './pages/Default';
import About from './pages/About';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
