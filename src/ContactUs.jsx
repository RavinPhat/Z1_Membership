import React, { useEffect, useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

const ContactUs = () => {

  const [phone, setPhone] = useState()
  const [contactUs, setContactUs] = useState()
  useEffect(() => {

    getPhone()
    getContactUs()
  }, []);

  const getPhone = async () => {
    const resPhone = await axios.get('https://dev-z1m.z1platform.com/api/user/home/visit/info',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    setPhone(resPhone.data.data);
  }

  const getContactUs= async () => {
    const resContactUs = await axios.get('https://dev-z1m.z1platform.com/api/user/get/home-visit',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    setContactUs(resContactUs.data.data);
  }
  
  return (
    <div style={{ background: 'white'}} >
        <div className='d-flex justify-content-between' style={{paddingTop:'15px',paddingBottom:'15px', backgroundColor:'white'}}>
          <div>
          <Link to={'/page'}>
          <DehazeIcon sx={{ width: 100, fontSize: 32 }} />
          </Link>
          <Link to={'/homepage'}>
          <img style={{height:'36px',}} src={'./Horizontal.png'} />
          </Link>
          </div>
          <div>
          <QrCodeScannerIcon sx={{ width: 50, fontSize: 32 }} />
          <NotificationsActiveIcon sx={{ width: 50, fontSize: 32 }} />
          <Link to={'/homepage'}>
            <CloseIcon sx={{ width: 50, fontSize: 32 }} />
          </Link>
          </div>
        </div>
        <div style={{textAlign:'center'}}>
            <div >
                <img src={'./contact-us.png'} style={{height: '130px', borderRadius: '999px', marginBottom:'10px',marginTop:'10%'}}/>
            </div>
            <div style={{marginBottom:'15px', marginTop:'15px'}}>
                <strong>Need Help ?</strong>
            </div>
            <p>Contact us 24/7 by choosing any channel</p>
            <p>you would love to below</p>
        </div>
        <div style={{marginTop:'50%'}}>
            <button style={{ width:'90%',padding:'2%',marginLeft:'5%',marginRight:'5%',marginBottom:'2%', backgroundColor:'green', color:'white', border:'white', borderRadius: '99px'}}><PhoneIcon /> <b>Call Hotline</b></button>
            <button style={{ width:'90%',padding:'2%',marginLeft:'5%',marginRight:'5%',marginBottom:'5%', backgroundColor:'white', color:'black', border:'white', borderRadius: '99px',borderColor:'green',border: '2px solid green'}}><TelegramIcon/> <b>Telegram</b></button>
        </div>
        <Outlet />
    </div>
  )
}

export default ContactUs