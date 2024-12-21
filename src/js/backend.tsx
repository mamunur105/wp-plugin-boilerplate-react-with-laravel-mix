/**
 * Backend TS.
 *
 */
import * as React from 'react';

import { createRoot } from 'react-dom/client';
import App from '@/backend/App';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('boilerplate_root');
    // Type guard to ensure container is not null
    if (container) {
        const root = createRoot(container as HTMLElement); // Explicit type cast
        root.render(<App/>);
    }
});