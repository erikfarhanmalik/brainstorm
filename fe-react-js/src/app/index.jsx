import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducer/reducers';
import NavigationBar from './component/NavigationBar';
import PageFooter from './component/PageFooter';
import HomePage from './component/page/HomePage';
import PostQuestionPage from './component/page/PostQuestionPage';
import initialState from './initialState';

import './css/main.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

class App extends React.Component {

  render() {
    return (<BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact={true} path={'/'} component={HomePage}></Route>
          <Route path={'/post-question'} component={PostQuestionPage}></Route>
        </Switch>
        <PageFooter />
      </div>
    </BrowserRouter>);
  }

};

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
