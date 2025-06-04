import React from 'react';
import ReactDOM from 'react-dom/client';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import modules styles
import './css/swiper.css';
// Components Styles
import '../web-components-library/src/styles/theme.css';
// Custom Styles (App)
import './css/index.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();