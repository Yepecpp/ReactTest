import React from 'react'
import Button from './button'
function grabdt(){
    console.log('grabando')
    var From = document.getElementById('From').value;
    var To = document.getElementById('To').value;
    var mess = document.getElementById('mess').value;
    console.log(From)
    console.log(To)
    console.log(mess)
    var data = {
        Sender: From,
        Reciver: To,
        MText: mess
    }
    console.log(data)
    fetch('http://186.7.57.113:1434/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
function Footer () {
  return (
    <div className='Foot'>
        <form action="">
        <label htmlFor="From" className='FL'>De</label>
        <input type="text" id="From" className='Inputs' name="From"></input>
        <label htmlFor="To" className='FL'>Para</label>
        <input type="text" id="To"  className='Inputs'name="To"></input>
        <input type="text" id="mess"  className='Inputs' name="mess"></input>
        <Button className='btn' color='black' text='Enviar' id='Fb' onClick={grabdt}/>
        </form>
    </div>
  )
}

export default Footer