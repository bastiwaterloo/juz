import React from 'react';
import ReactDOM from 'react-dom';
import LogoBox from './LogoBox';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogoBox imageSrc={ require("../../assets/img/logo_dw.png") } />, div);
});