import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import './components/App';
import { getJSON } from './utils/request';

const onContentReady = () => {
    console.error('onContentReady')
    console.log('App have loaded and dom is ready');
    const {body} = document;
    const root = document.createElement('div');
    root.id = 'app';
    body.appendChild(root);

    const mountApp = async () => {
        const {App} = await import('./components/App');
        render(<App />, root)
    }

    mountApp();

    interface IData {
        status: number;
        strings: string[];
    }

    getJSON<IData>('public/test.json')
        .then((data) => {
            console.error(data.strings)
        })

    if(module.hot) {
        module.hot.accept('./components/App', mountApp);
    }
}

document.addEventListener('DOMContentLoaded', onContentReady);
