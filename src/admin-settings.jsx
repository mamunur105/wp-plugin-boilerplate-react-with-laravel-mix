import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Component/App';

const root = createRoot( document.getElementById( 'boilerplate_root' ) );

/**
 * Render the server status page.
 */
root.render(<App />);

