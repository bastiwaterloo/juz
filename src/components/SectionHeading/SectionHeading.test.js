import React from 'react';
import ReactDOM from 'react-dom';
import SectionHeading from './SectionHeading';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionHeading heading="Unsere neusten Angebote"/>, div);
});