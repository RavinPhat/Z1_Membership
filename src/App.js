import './App.css';
import "swiper/css/bundle";
import "./index.css";
import HomePage from './HomePage';
import TopPartner from './TopPartner';
import OurPartner from './OurParter';
import Advisory from './CategoryPartner';
import Partner from './Partner';
import MembershipPrivileges from './MembershipPrivileges';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    // <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route  path='/toppartner' element={<TopPartner />} />
        <Route  path='/ourpartner' element={<OurPartner />} />
        <Route  path='/categorypartner/:id' element={<Advisory />} />
        <Route  path='/partner/:id' element={<Partner />} />
        <Route  path='/membershipprivileges' element={<MembershipPrivileges />} />
      </Routes>
      </BrowserRouter>
    // </div>
  );
  }
export default App;
