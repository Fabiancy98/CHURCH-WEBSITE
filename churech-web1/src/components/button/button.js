import React from 'react';
import '../button/button.js';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

export const button = ({children. type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
}


