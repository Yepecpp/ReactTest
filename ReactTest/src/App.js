import Messages from './componets/Messages';
import Header from './componets/header';

function App() {
  return (
    <div className='container'>
    <Header text='Envia un mensaje a una persona querida tuya'/>
    <Messages/>
    </div>
  );
}

export default App;
