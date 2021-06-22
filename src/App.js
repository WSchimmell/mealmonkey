
// ''import './component/App.scss';''
import React from 'react';
import Meals from "./components/Meals";
import Header from "./components/Header";
import SeachBar from "./components/SearchBar";
import Slider from './components/Slider';
import Main from './components/Main';
import Most from './components/Most';
import Recent from './components/Recent';


function App() {
  return (
    <div className="container">
      <Header />
      <SeachBar items={Meals}/>
      <Slider />
      <Main />
      <Most />
      <Recent />
    </div>
  )
}

export default App







// // import logo from './logo.svg';
// // import './App.css';
// // 
// import { Router } from '@reach/router';
// // import CategoryScroll from './components/CategoryScroll';
// // import MiddleSection from './components/MiddleSection';
// // import TopMessage from './components/TopSection';
// // import MiddleScroll from './components/MiddleScroll';
// // import Counter from './components/Counter';
// import Meals from './components/Meals'
// import TheMeal from './components/TheMeal';
// import Styled from './components/Styled';



// function App() {
//   return (
//     <div className="App">
//       {/* <TopMessage name="Akila" />
//       <CategoryScroll />
//       <MiddleSection />
//       <MiddleScroll /> */}
//       {/* <TheMeal /> */}
//       {/* <Counter /> */}
//     {/* <Meals /> */}
//       {/* <Router>
//         <TheMeal path="/" />
//         <Styled path="styled" />
//          <Meals path="/:category" />

//       </Router> */}

//     </div>
//   );
// }

// export default App;
