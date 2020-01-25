import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AppBar from './components/AppBar';
import Home from './views/Homepage';
import About from './views/About';
import Comments from './views/Comments';
import Contact from './views/Contact';

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/contact" component={Contact} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

ReactDOM.render(
    <App />,
  document.querySelector('#root'),
);
