/* mui5 */
import CssBaseline from '@mui/material/CssBaseline';

/* react-dom */
import { createRoot } from 'react-dom/client';

/* react-router-dom */
import { BrowserRouter } from 'react-router-dom';

/* recoil */
import { RecoilRoot } from 'recoil';

/* src */
import { App } from 'App';
import 'index.css';
import reportWebVitals from 'reportWebVitals';

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <CssBaseline />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
