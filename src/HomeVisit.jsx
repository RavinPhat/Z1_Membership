import React, { useEffect, useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

const HomeVisit = () => {
  const [homeVisitInfo, setHomeVisitInfo] = useState()
  const [homeVisit, setHomeVisit] = useState()
  useEffect(() => {

    getHomeVisitInfo()
    getHomeVisit()
  }, []);

  const getHomeVisitInfo = async () => {
    const resHomeVisitInfo = await axios.get('https://dev-z1m.z1platform.com/api/user/home/visit/info',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    setHomeVisitInfo(resHomeVisitInfo.data.data.home_visit_info);
  }

  const getHomeVisit= async () => {
    const resHomeVisit = await axios.get('https://dev-z1m.z1platform.com/api/user/get/home-visit',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    console.log(resHomeVisit.data.data);
    setHomeVisit(resHomeVisit.data.data);
  }
  
  return (
    <div style={{ background: 'white'}} >
        <div className='d-flex justify-content-between' style={{paddingTop:'15px',paddingBottom:'15px', backgroundColor:'white'}}>
          <div>
          <Link to={'/page'} className='text-decoration-none'>
          <DehazeIcon sx={{ width: 100, fontSize: 32 }} />
          </Link>
          <Link to={'/homepage'} className='text-decoration-none'>
          <img style={{height:'36px'}} src={'./Horizontal.png'} />
          </Link>
          </div>
          <div>
          <QrCodeScannerIcon sx={{ width: 50, fontSize: 32 }} />
          <NotificationsActiveIcon sx={{ width: 50, fontSize: 32 }} />
          <CloseIcon sx={{ width: 50, fontSize: 32 }} />
          </div>
          
        </div>

        <div>
          <div style={{height : '100vh'}}>
            <div className='row'>
                <h1 className='col' style={{textAlign: 'start', fontSize:'24px', marginTop:'3%',marginLeft:'5%'}}>Home Visit</h1>
                </div>
                <p className='col' style={{textAlign: 'start',marginLeft:'5%'}}>{homeVisitInfo?.value}</p>
                <div>
                  {homeVisit?.map((data)=>
                  <div className='row' key={data.id} style={{padding:'2%',paddingLeft:'5%'}}>
                    <div className='col-4' >
                      <img src={data?.icon} style={{borderRadius: '10px',height:'120px',width:'160px'}}></img>
                    </div>
                    <div className='col-8' style={{paddingTop:'3%'}}>
                      <div className='row'>
                        <div className='col'><b>{data?.title}</b></div>
                      </div>
                      <div className='row'>
                        <div className='col'>{data?.name}</div>
                      </div>
                      <div className='row'>
                        <div className='col'>{data?.publish_date}</div>
                      </div>
                    </div>
                  </div>
                  )}
            </div>
        </div>
        
        <Outlet />
      </div>
    </div>
  )
}

export default HomeVisit