import Navbar from './components/navbar/Navbar'
import './App.scss';
import HomePage from './pagess/Homepage/HomePage'
import Welcome from './pagess/Welcome'
import SignUp from './pagess/Forms/SignUp'
import About from './components/about/About'
import { Routes, Route } from 'react-router-dom'
import JiuJitsu from './pagess/JiuJitsu'
import Boxing from './pagess/Boxing'
import KickBoxing from './pagess/KickBoxing'
import Wrestling from './pagess/Wrestling'
import WeightLifting from './pagess/WeightLifting'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<SignUp />} />
        <Route path='/jiujitsu' element={< JiuJitsu />} />
        <Route path='/boxing' element={<Boxing />} />
        <Route path='/wrestling' element={<Wrestling />} />
        <Route path='/kickboxing' element={<KickBoxing />} />
        <Route path='/lifting' element={<WeightLifting />} />

      </Routes>
    </div>
  );
}

export default App;
