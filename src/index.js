import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_key = 'AIzaSyACFQ6GupfoxUgxtPMFCbZAbn4VHqChbMI';

// Create new component
// This is going to produce some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML
ReactDOM.render(<App />, document.querySelector('.container'));
//and put it on the page (in the DOM)
