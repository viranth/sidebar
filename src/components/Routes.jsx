import {Routes,Route } from 'react-router-dom';
import Alerts from '../pages/Alerts'
import Details from '../pages/Details'
import Graphs from '../pages/Graphs'
import Home from '../pages/Home';
import Plugins from '../pages/Plugins'
import Stats from '../pages/Stats'
import Weather from '../pages/Weather';

export default function RouterComp() {
  return (
    <div className='container'>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/graphs" element={<Graphs/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/alerts" element={<Alerts/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/plugins" element={<Plugins/>}/>
        </Routes>
    </div>
  )
}
