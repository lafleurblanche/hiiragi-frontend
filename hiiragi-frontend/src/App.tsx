/* react */
import { ReactElement } from 'react';

/* react-router-dom */
import {
  Route,
  Routes
} from 'react-router-dom';

/* pages */
import MainPage from 'pages/MainPage';
import { HiiragiRW01Page } from 'pages/HiiragiRW/HiiragiRW01Page';

/* css */
import './App.css';

export const App = (): ReactElement => {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hiiragi/stalist/rw01" element={<HiiragiRW01Page />} />
    </Routes>
  );
};
