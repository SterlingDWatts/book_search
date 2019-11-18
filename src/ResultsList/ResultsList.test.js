import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsList';

describe(`ResultsList Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResultsList />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})