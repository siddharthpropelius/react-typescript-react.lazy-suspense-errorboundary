import React from 'react';
import ReactDOM, {createRoot, hydrateRoot} from 'react-dom/client';
import './index.css';
import App from './App';
const root = document.getElementById("root");


const container = createRoot(root!)
if (root?.hasChildNodes()) {
   hydrateRoot(root!,<App/>)
} else {
container.render(<App/>)
}
