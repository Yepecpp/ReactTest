import React from 'react'
import propstypes from 'prop-types';
import Button from './button.js';


 const Header = (props) => {
  return (
    <Header className= 'header'>
        <h1>{props.title}</h1>
        <Button className='btn' text='app' color='violet' onClick={(e)=>{
        console.log('Hey');
    }}/>
     <Button className='btn' text='app' color='green' /> 
    </Header>
  )
}
Header.defaultProps = {
    title: 'Indecision App'
}
Header.propTypes = {
    title: propstypes.string.isRequired
}
export default Header;