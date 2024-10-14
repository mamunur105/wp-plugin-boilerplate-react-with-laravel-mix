import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Component/App';
import {setupNavigation} from "./navigation";

const root = ReactDOM.createRoot( document.getElementById( 'ancenter_root' ) );

/**
 * Render the server status page.
 */
root.render(<App />);

//Row Js
setupNavigation();