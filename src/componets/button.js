import React from 'react'
import propTypes from 'prop-types';
const button = ({onClick, className, color, text}) => {
 
  return <button onClick={onClick} className={className} style={{backgroundColor: color}}>{text}</button>

}
const oncli=(e)=>{
    console.log(e);
}
button.defaultProps = {
    className: 'btn',
    color: 'black',
    text: 'app',
    onClick: oncli
}
button.propTypes = {
    className: propTypes.string.isRequired,
    color: propTypes.string,
    text: propTypes.string.isRequired,
}
export default button;