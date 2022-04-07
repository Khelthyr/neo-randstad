import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/variables.css";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/tailwind.css";
import "@randstad-design/orbit-multitheme/dist/assets/theme-randstad/orbit-randstad.css";
import "@randstad-design/orbit-multitheme/dist/assets/js/human-forward.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)
// ReactDOM.render(<App />, document.getElementById('root'));
