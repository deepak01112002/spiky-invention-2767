
import './App.css';
// import ProjectLogo from './Images/ProjectLogo
import ProjectLogo from './ProjectLogo.png'
import upperlog from './upperlogo.png'
import Navbar from './Components/Navbar';
import {Link} from 'react-router-dom'
import AllRoutes from './Components/AllRoutes';
import Upperposter from './Upperposter.png'
import Home from './Pages/Home'
import Element from './Pages/Element';
import LargeWithLogoLeft from './Pages/Footer'
function App() {
 
  return (
    <div className="App">
      
      <img src={upperlog} alt="" />
      <div className='UpperFlex'>
      <Link to="/"><img src={ProjectLogo} alt="Logo" width="65%" /></Link>
      <img src="https://tpc.googlesyndication.com/simgad/7927172843755219682" alt="add" />
      </div>
      <Navbar/>
      <AllRoutes/>
      <LargeWithLogoLeft/>
      
      
      
    </div>
  );
}

export default App;
