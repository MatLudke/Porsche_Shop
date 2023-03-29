import './App.css'

function App() {
  return (
    <div className="App">
      <video className="videoTag" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/Porsche.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
