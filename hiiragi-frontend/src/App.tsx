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

/* css */
import './App.css';

export const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
      </Switch>
    </Router>
  );
};
