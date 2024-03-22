import './App.css';
import Home from './pages/Home';
import background from './assets/images/background.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Home />
    </div>
  );
}

export default App;
