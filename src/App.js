// import logo from './logo.svg';
// import './App.css';
import { Router } from '@reach/router';
import CategoryScroll from './components/CategoryScroll';
import MiddleSection from './components/MiddleSection';
import TopMessage from './components/TopSection';
import MiddleScroll from './components/MiddleScroll';
// import Meals from './components/Meals'
// import Counter from './components/Counter';
import TheMeal from './components/TheMeal';



function App() {
  return (
    <div className="App">
      {/* <TheMeal />
      <TopMessage name="Akila" />
      <Counter />
      <CategoryScroll />
      <MiddleSection />
      <MiddleScroll />
    <Meals /> */}
      <Router>
        <TheMeal path="/" />
         <Meals path="/:category" />

      </Router>

    </div>
  );
}

export default App;
