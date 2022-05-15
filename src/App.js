import Header  from "./componets/Header";
function App() {
  const name = 'Juan';
  return (
    <div className="container">
      <Header/>
    <h1>Hey {name}</h1>
    </div>
  );
}

export default App;
