
import './App.css';
import Dashboard from './component/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import ViewToggle from './component/ViewToggle';
import Feedback from './component/Feedback';

function App() {
  return (
    <div className='container-fluid p-0 new'>
      <div className='row'>
        <div className='col-auto'>
          <Sidebar />
        </div>
        <div className='col newcol'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/viewToggle' element={<ViewToggle />} />
            <Route path='/feedback' element={<Feedback />} />
          </Routes>
        </div>

      </div>

    </div>

  );
}

export default App;
