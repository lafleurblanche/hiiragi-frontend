/* react */
import { ReactElement } from 'react';

/* react-router-dom */
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/* pages */
import MainPage from 'pages/MainPage';
import { HiiragiRW01Page } from 'pages/HiiragiRW/HiiragiRW01Page';

/* css */
import './App.css';

export const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/hiiragi/stalist/rw01" component={HiiragiRW01Page} exact />
      </Switch>
    </Router>
  );
};
