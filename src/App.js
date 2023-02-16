// import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterComp from './components/Routes';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
// import Alerts from './pages/Alerts';
// import Details from './pages/Details';
// import Graphs from './pages/Graphs';
// import Home from './pages/Home';
// import Plugins from './pages/Plugins';
// import Stats from './pages/Stats';

import HomeBackround from "./Assets/BG.png"
function App() {
  return (
    <div style={{display:'flex'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <TopBar/>
      <Sidebar>
      <RouterComp/>
      </Sidebar>
      </div>
        
      

      
    </div>
    

  );
}

export default App;
