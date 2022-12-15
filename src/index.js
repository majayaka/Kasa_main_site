import ReactDOM from 'react-dom/client';
/* Import of React Router for... */
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
/* Import of App.js... */
import App from './App';

/* Render React to html with the div "root"
, then put this snippet in a constant */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/* generate the components with render method */
<Router>
    <App />
</Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

