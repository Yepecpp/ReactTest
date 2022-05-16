import React from 'react';
import propTypes from 'prop-types';
import Button from './button';
const header = ({className, text}) => {
  return (
    <header className={className}>
        <h1>{text}</h1>
        <Button color='black' text='Reload'/>
    </header>

  )
}

header.defaultProps = {
    className: 'header',
    text: 'React Test'
}
header.propTypes = {
className: propTypes.string.isRequired
}
export default header