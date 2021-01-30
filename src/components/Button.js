import React from 'react';
import classNames from 'classnames';
import './Button.scss';


//size: large, medium, small
function Button({ children, size }) {
    return <button className={ classNames('Buttons', size) }>{children}</button>
}

Button.defaultProps = {
    size: 'medium'
};

export default Button;