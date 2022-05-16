import Messages from './componets/Messages';
import Header from './componets/header';
import Footer from './componets/footer';
function App() {
  return (
    <div className='container'>
    <Header text='Envia un mensaje a una persona querida tuya'/>
    <Messages/>
    <Footer/>
    </div>
  );
}

export default App;
