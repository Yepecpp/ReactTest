import React from 'react'
import propTypes from 'prop-types';
const Button = ({onClick, className, color, text, id}) => {
 
  return <button onClick={onClick} className={className} style={{backgroundColor: color}} id={id}>{text}</button>

}
Button.defaultProps = {
    className: 'btn',
    color: 'black',
    text: 'app',
}
Button.propTypes = {
    className: propTypes.string.isRequired,
    color: propTypes.string,
    text: propTypes.string.isRequired,
}
export default Button;