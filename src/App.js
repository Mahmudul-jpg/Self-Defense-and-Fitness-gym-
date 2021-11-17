import Navbar from './components/navbar/Navbar'
import './App.scss';
import HomePage from './pagess/Homepage/HomePage'
import SignUp from './pagess/Forms/SignUp'
import About from './components/about/About'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>


        <Route path='/' element={<HomePage />} />
        <Route path='/program' />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
