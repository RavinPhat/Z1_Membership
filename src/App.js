import './App.css';
import './TopPartner.css';
import './OurPartner.css';
import "swiper/css/bundle";
import "./index.css";
import HomePage from './HomePage';
import TopPartner from './TopPartner';
import OurPartner from './OurParter';
import Advisory from './CategoryPartner';
import Partner from './Partner';
import MembershipPrivileges from './MembershipPrivileges';
import Page from './Page';
import HomeVisit from './HomeVisit';
import ContactUs from './ContactUs';
import FAQs from './FAQs';
import Login from'./Login';
import { BrowserRouter, Routes, Route , Redirect} from 'react-router-dom';

function App() {

  return (
    <>
    <div style={{maxWidth:'1024px', margin:'0px auto'}}>
      <BrowserRouter>
      <Routes>
        
        <Route  path='/' element={<Login />} />
        <Route  path='/toppartner' element={<TopPartner />} />
        <Route  path='/ourpartner' element={<OurPartner />} />
        <Route  path='/categorypartner/:id' element={<Advisory />} />
        <Route  path='/partner/:id' element={<Partner />} />
        <Route  path='/membershipprivileges' element={<MembershipPrivileges />} />
        <Route  path='/page' element={<Page />} />
        <Route  path='/homevisit' element={<HomeVisit />} />
        <Route  path='/contactus' element={<ContactUs />} />
        <Route  path='/faqs' element={<FAQs />} />
        <Route  path='/homepage' element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
     <footer style={{ backgroundColor:'#287F30',textAlign:'center',paddingTop:'20px',paddingBottom:'20px'}}>
        <b style={{color:'white'}}>Copyright © 2022 Z1 Flexible Solution. All rights reserved.</b>
     </footer>
     </>
  );
  }
export default App;
