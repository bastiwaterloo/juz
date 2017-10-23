import React from 'react';
import ReactDOM from 'react-dom';
import WatchPanel from './WatchPanel';
import rolex from "../../rolex.png";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WatchPanel imageSrc={rolex} watchName="Rolex Submarines LL 1213443" price={3640} oldPrice={9566}/>, div);
});
