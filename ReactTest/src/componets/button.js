import React from 'react'
import propTypes from 'prop-types';
const Button = ({onClick, className, color, text}) => {
 
  return <button onClick={onClick} className={className} style={{backgroundColor: color}}>{text}</button>

}
const oncli=(e)=>{
  console.log('clicked');
}
Button.defaultProps = {
    className: 'btn',
    color: 'black',
    text: 'app',
    onClick: oncli
}
Button.propTypes = {
    className: propTypes.string.isRequired,
    color: propTypes.string,
    text: propTypes.string.isRequired,
}
export default Button;