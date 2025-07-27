 
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 const heading =  React.createElement('h1', null, 'Hello, World! using React JSX');
        const parent = React.createElement('div', {id:"parent"}, heading)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);