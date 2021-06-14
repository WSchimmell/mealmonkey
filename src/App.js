// import logo from './logo.svg';
import './App.css';
import CategoryScroll from './components/CategoryScroll';
import TopMessage from './components/TopMessage'

function App() {
  return (
    <div className="App">
      <TopMessage name="Akila" />
      <CategoryScroll />
    </div>
  );
}

export default App;
