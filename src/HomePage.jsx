import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Accordion from 'react-bootstrap/Accordion';
import { Clear, Opacity } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import s from "./home.module.css"

const HomePage = () => {
  const [homepageSlide, setHomepageSlide] = useState()
  const [service, setService] = useState()
  const [homeVisitInfo, setHomeVisitInfo] = useState()
  const [topPartner, setTopPartner] = useState()
  useEffect(() => {
    getService()
    getSlide()
    getHomeVisitInfo()
    getTopPartner()
  }, []);
  const getSlide = async () => {
    const resSlide = await axios.get('https://dev-z1m.z1platform.com/api/user/slide/list?categories=home_page',)
    setHomepageSlide(resSlide.data.data);
  }
  const getService = async () => {
    const resService = await axios.get('https://dev-z1m.z1platform.com/api/user/service/list',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    setService(resService.data.data);
  }
  const getHomeVisitInfo = async () => {
    const resHomeVisitInfo = await axios.get('https://dev-z1m.z1platform.com/api/user/home/visit/info',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    setHomeVisitInfo(resHomeVisitInfo.data.data.home_visit_info);
  }
  const getTopPartner = async () => {
    const resTopPartner = await axios.get('https://dev-z1m.z1platform.com/api/top-partner',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
      console.log(resTopPartner.data.data);
    setTopPartner(resTopPartner.data.data);
  }

  return (
      <div>
        <div className='d-flex justify-content-between navbar sticky-top' style={{paddingBottom:'15px', backgroundColor:'white',maxWidth:'1024px',width:'100%',zIndex:'100',marginBottom:'10px'}}>
          <div>
            <Link to={'/page'} className='text-decoration-none'>
              <DehazeIcon sx={{ width: 50, fontSize: 32 }} />
            </Link>
            <img style={{height:'36px'}} src={'./Horizontal.png'} />
          </div>
          <div>
            <QrCodeScannerIcon sx={{ width: 50, fontSize: 32 }} />
            <NotificationsActiveIcon sx={{ width: 50, fontSize: 32 }} />
            <Link to={'/'} className='text-decoration-none'>
              <LogoutIcon sx={{ width: 50, fontSize: 32 }} />
            </Link>
          </div>
        </div>
      <div style={{ background: 'white',position:'relative', paddingBottom:'20px'}} >
        <div style={{ width: '90%', margin: '0 auto', paddingTop: '30px' }}>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,

            }}
            className="mySwiper"
          >
            {homepageSlide?.map((data) =>
              <SwiperSlide><img key={data.id} src={data.image} alt={data.name} /></SwiperSlide>
            )}

          </Swiper>

        </div>
        <div className='row' style={{ margin: '20px', background: 'white' }}>
          <div className='col-4'>
            {service?.slice(0,1).map((data) =>
              <Link to={'/membershipprivileges'} key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none' style={{ padding: '10px' }}>
                <img className='image-service' src={data.image}></img>
                <p className='col d-flex flex-column justify-content-center align-items-center gap-2' style={{textAlign:'center'}}>{data.name}</p>
              </Link>
            )}
          </div>
          <div className='col-4'>
            {service?.slice(2,3).map((data) =>
              <Link to={'/ourpartner'} key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none' style={{ padding: '10px' }}>
                <img className='image-service' src={data.image}></img>
                <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
              </Link>
            )}
          </div>
          <div className='col-4'>
            {service?.slice(1,2).map((data) =>
              <div key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                <img className='image-service' src={data.image}></img>
                <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
              </div>
            )}
          </div>
        </div>
        <div >
          <h1><VolunteerActivismIcon sx={{ width: 50, fontSize: 40 }} />How We Care</h1>
        </div>
        <div className='home-visit-info'>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}

            className="mySwiper"
            style={{position : 'relative' , zIndex: '0'}}
          >
            <SwiperSlide>
              <div className='row width-100' style={{ backgroundImage: 'url(./test2323.jpg)', backgroundSize: '100%' }}>

                <div className='col-7' >
                  <p className='home-visit-info-title'>HOME VISIT</p>
                  <p className='home-visit-info-content'>{homeVisitInfo?.value}</p>
                  <Link to={'/homevisit'} className='text-decoration-none'>
                    <button className='home-visit-info-button'>View our activity</button>
                  </Link>
                </div>
                <div className='col-5 d-flex' style={{ margin: '0 auto', justifyContent: 'center', alignItems: 'center', }} >
                  <svg width="200px" height="100px" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.22 20.8757C28.429 22.7692 32.4048 22.7517 33.6176 20.9291C34.3685 21.8404 35.3322 22.308 36.5589 22.2647C36.5682 22.4074 36.5831 22.5289 36.5831 22.6504C36.5841 27.0947 36.585 31.5398 36.5841 35.984C36.5841 36.7517 36.3341 36.9966 35.5616 36.9966C31.3264 36.9966 27.0903 36.9966 22.8551 36.9966C22.7282 36.9966 22.6023 36.9966 22.4372 36.9966C22.4269 36.8318 22.4101 36.6882 22.4101 36.5455C22.4082 33.1231 22.4092 29.7006 22.4092 26.2782C22.4092 25.4276 22.1965 25.2168 21.342 25.2168C19.5733 25.2168 17.8045 25.2168 16.0358 25.2168C15.2093 25.2168 14.9705 25.4497 14.9705 26.2524C14.9705 29.6859 14.9705 33.1203 14.9705 36.5538C14.9705 36.6891 14.9705 36.8244 14.9705 36.9883C13.9276 36.9883 12.9191 37.004 11.9107 36.98C11.5469 36.9717 11.3043 36.6873 11.254 36.3283C11.2381 36.2151 11.2353 36.0991 11.2353 35.9849C11.2344 31.5407 11.2344 27.0956 11.2344 22.6514C11.2344 22.5381 11.2344 22.4249 11.2344 22.2703C12.4499 22.3025 13.4303 21.868 14.1916 20.9282C14.2718 21.0129 14.3399 21.0856 14.408 21.1583C15.0629 21.8588 15.8651 22.2555 16.8372 22.2537C17.451 22.2519 18.0769 22.2629 18.6758 22.1524C19.466 22.0061 20.0882 21.5311 20.5873 20.8711C21.4595 21.891 22.5678 22.2758 23.8915 22.2767C25.2162 22.2776 26.3347 21.9159 27.22 20.8757ZM26.1434 28.9007C26.1434 29.8184 26.1416 30.7371 26.1444 31.6549C26.1462 32.2771 26.4065 32.5542 27.0203 32.556C28.6715 32.5625 30.3227 32.5625 31.9738 32.556C32.5727 32.5533 32.847 32.2753 32.8479 31.6871C32.8517 29.8286 32.8507 27.9691 32.8479 26.1106C32.847 25.5105 32.556 25.2187 31.9543 25.2177C30.3152 25.2141 28.6752 25.2141 27.0362 25.2177C26.4345 25.2187 26.1462 25.5105 26.1444 26.1125C26.1416 27.0422 26.1434 27.971 26.1434 28.9007Z" fill="#054A25" />
                    <path d="M23.8946 9.0281C24.348 9.0281 24.8023 9.03362 25.2557 9.02534C25.4292 9.02258 25.4954 9.07781 25.515 9.25639C25.7912 11.7859 26.0738 14.3137 26.3574 16.8423C26.4134 17.3431 26.4777 17.8438 26.5402 18.3437C26.6979 19.6167 25.6578 20.7987 24.3573 20.8014C23.8834 20.8023 23.3946 20.8244 22.9375 20.7232C21.8349 20.4802 21.1436 19.3756 21.2836 18.2663C21.4813 16.6978 21.6408 15.1237 21.8181 13.5524C21.9795 12.1173 22.1465 10.6832 22.3013 9.24718C22.3209 9.06124 22.403 9.02166 22.5681 9.0235C23.0112 9.0327 23.4534 9.0281 23.8946 9.0281Z" fill="#24A562" />
                    <path d="M17.7693 9.04297C18.7927 9.04297 19.7909 9.04297 20.8441 9.04297C20.7844 9.61184 20.7302 10.1641 20.6677 10.7165C20.4924 12.2657 20.3123 13.8149 20.1369 15.365C19.9914 16.6528 19.8655 17.9425 19.7022 19.2284C19.5847 20.1554 18.7964 20.8043 17.843 20.8098C17.5175 20.8117 17.191 20.8135 16.8654 20.8089C15.6862 20.7942 14.7898 19.6914 15.0985 18.5656C15.9157 15.5832 16.7628 12.6099 17.5986 9.63302C17.6537 9.43603 17.7124 9.23996 17.7693 9.04297Z" fill="#24A562" />
                    <path d="M26.9785 9.02896C27.7015 9.02896 28.3965 9.0262 29.0915 9.02988C29.404 9.03172 29.8023 8.93323 30.0066 9.08419C30.209 9.23423 30.2258 9.63834 30.3098 9.93566C31.099 12.7359 31.8649 15.5425 32.6821 18.3353C33.0869 19.7188 32.0225 20.9201 30.7669 20.8106C30.3406 20.7737 29.8975 20.8271 29.4861 20.7342C28.6903 20.5547 28.2192 19.9987 28.1185 19.2153C27.9002 17.5096 27.7323 15.7975 27.5392 14.0881C27.3657 12.5499 27.1856 11.0127 27.0093 9.47449C26.9944 9.34101 26.9906 9.2057 26.9785 9.02896Z" fill="#24A562" />
                    <path d="M16.2362 9.03318C15.7912 10.6119 15.3593 12.1417 14.9283 13.6735C14.4041 15.5366 13.8798 17.4006 13.3593 19.2646C13.0635 20.3223 12.4255 20.8111 11.3135 20.8047C11.001 20.8028 10.6782 20.8157 10.3788 20.7457C9.20148 20.4724 8.59231 19.3291 9.07367 18.2429C10.3051 15.4629 11.5626 12.6931 12.8163 9.92239C13.0589 9.38574 13.502 9.07092 14.0916 9.04147C14.7875 9.00649 15.4862 9.03318 16.2362 9.03318Z" fill="#24A562" />
                    <path d="M31.5859 9.04007C32.3509 9.04007 33.0832 9.00509 33.8099 9.05112C34.3547 9.0861 34.7679 9.40643 34.9937 9.90259C36.2531 12.6844 37.5199 15.4625 38.7494 18.2571C39.2914 19.4879 38.3744 20.7885 37.0087 20.8033C36.6598 20.8069 36.3016 20.8401 35.9648 20.7729C35.1747 20.6155 34.6924 20.1101 34.4788 19.3452C33.6569 16.4115 32.8332 13.4797 32.0095 10.546C31.8714 10.0526 31.7315 9.55924 31.5859 9.04007Z" fill="#24A562" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='width-100 row' style={{ backgroundImage: 'url(./test2323.jpg)', backgroundSize: '100%' }}>
                <div className='col-6' >
                  <p className='home-visit-info-title'>24/7 HOTLINE</p>
                  <p className='home-visit-info-content'>{homeVisitInfo?.value}</p>
                  <Link to={'/contactus'} className='text-decoration-none'>
                  <button className='home-visit-info-button'>Contact Us</button>
                  </Link>
                </div>
                <div className='col-6 d-flex' style={{ margin: '0 auto', justifyContent: 'center', alignItems: 'center', }} >
                  <svg width="200" height="100" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.22 20.8757C28.429 22.7692 32.4048 22.7517 33.6176 20.9291C34.3685 21.8404 35.3322 22.308 36.5589 22.2647C36.5682 22.4074 36.5831 22.5289 36.5831 22.6504C36.5841 27.0947 36.585 31.5398 36.5841 35.984C36.5841 36.7517 36.3341 36.9966 35.5616 36.9966C31.3264 36.9966 27.0903 36.9966 22.8551 36.9966C22.7282 36.9966 22.6023 36.9966 22.4372 36.9966C22.4269 36.8318 22.4101 36.6882 22.4101 36.5455C22.4082 33.1231 22.4092 29.7006 22.4092 26.2782C22.4092 25.4276 22.1965 25.2168 21.342 25.2168C19.5733 25.2168 17.8045 25.2168 16.0358 25.2168C15.2093 25.2168 14.9705 25.4497 14.9705 26.2524C14.9705 29.6859 14.9705 33.1203 14.9705 36.5538C14.9705 36.6891 14.9705 36.8244 14.9705 36.9883C13.9276 36.9883 12.9191 37.004 11.9107 36.98C11.5469 36.9717 11.3043 36.6873 11.254 36.3283C11.2381 36.2151 11.2353 36.0991 11.2353 35.9849C11.2344 31.5407 11.2344 27.0956 11.2344 22.6514C11.2344 22.5381 11.2344 22.4249 11.2344 22.2703C12.4499 22.3025 13.4303 21.868 14.1916 20.9282C14.2718 21.0129 14.3399 21.0856 14.408 21.1583C15.0629 21.8588 15.8651 22.2555 16.8372 22.2537C17.451 22.2519 18.0769 22.2629 18.6758 22.1524C19.466 22.0061 20.0882 21.5311 20.5873 20.8711C21.4595 21.891 22.5678 22.2758 23.8915 22.2767C25.2162 22.2776 26.3347 21.9159 27.22 20.8757ZM26.1434 28.9007C26.1434 29.8184 26.1416 30.7371 26.1444 31.6549C26.1462 32.2771 26.4065 32.5542 27.0203 32.556C28.6715 32.5625 30.3227 32.5625 31.9738 32.556C32.5727 32.5533 32.847 32.2753 32.8479 31.6871C32.8517 29.8286 32.8507 27.9691 32.8479 26.1106C32.847 25.5105 32.556 25.2187 31.9543 25.2177C30.3152 25.2141 28.6752 25.2141 27.0362 25.2177C26.4345 25.2187 26.1462 25.5105 26.1444 26.1125C26.1416 27.0422 26.1434 27.971 26.1434 28.9007Z" fill="#054A25" />
                    <path d="M23.8946 9.0281C24.348 9.0281 24.8023 9.03362 25.2557 9.02534C25.4292 9.02258 25.4954 9.07781 25.515 9.25639C25.7912 11.7859 26.0738 14.3137 26.3574 16.8423C26.4134 17.3431 26.4777 17.8438 26.5402 18.3437C26.6979 19.6167 25.6578 20.7987 24.3573 20.8014C23.8834 20.8023 23.3946 20.8244 22.9375 20.7232C21.8349 20.4802 21.1436 19.3756 21.2836 18.2663C21.4813 16.6978 21.6408 15.1237 21.8181 13.5524C21.9795 12.1173 22.1465 10.6832 22.3013 9.24718C22.3209 9.06124 22.403 9.02166 22.5681 9.0235C23.0112 9.0327 23.4534 9.0281 23.8946 9.0281Z" fill="#24A562" />
                    <path d="M17.7693 9.04297C18.7927 9.04297 19.7909 9.04297 20.8441 9.04297C20.7844 9.61184 20.7302 10.1641 20.6677 10.7165C20.4924 12.2657 20.3123 13.8149 20.1369 15.365C19.9914 16.6528 19.8655 17.9425 19.7022 19.2284C19.5847 20.1554 18.7964 20.8043 17.843 20.8098C17.5175 20.8117 17.191 20.8135 16.8654 20.8089C15.6862 20.7942 14.7898 19.6914 15.0985 18.5656C15.9157 15.5832 16.7628 12.6099 17.5986 9.63302C17.6537 9.43603 17.7124 9.23996 17.7693 9.04297Z" fill="#24A562" />
                    <path d="M26.9785 9.02896C27.7015 9.02896 28.3965 9.0262 29.0915 9.02988C29.404 9.03172 29.8023 8.93323 30.0066 9.08419C30.209 9.23423 30.2258 9.63834 30.3098 9.93566C31.099 12.7359 31.8649 15.5425 32.6821 18.3353C33.0869 19.7188 32.0225 20.9201 30.7669 20.8106C30.3406 20.7737 29.8975 20.8271 29.4861 20.7342C28.6903 20.5547 28.2192 19.9987 28.1185 19.2153C27.9002 17.5096 27.7323 15.7975 27.5392 14.0881C27.3657 12.5499 27.1856 11.0127 27.0093 9.47449C26.9944 9.34101 26.9906 9.2057 26.9785 9.02896Z" fill="#24A562" />
                    <path d="M16.2362 9.03318C15.7912 10.6119 15.3593 12.1417 14.9283 13.6735C14.4041 15.5366 13.8798 17.4006 13.3593 19.2646C13.0635 20.3223 12.4255 20.8111 11.3135 20.8047C11.001 20.8028 10.6782 20.8157 10.3788 20.7457C9.20148 20.4724 8.59231 19.3291 9.07367 18.2429C10.3051 15.4629 11.5626 12.6931 12.8163 9.92239C13.0589 9.38574 13.502 9.07092 14.0916 9.04147C14.7875 9.00649 15.4862 9.03318 16.2362 9.03318Z" fill="#24A562" />
                    <path d="M31.5859 9.04007C32.3509 9.04007 33.0832 9.00509 33.8099 9.05112C34.3547 9.0861 34.7679 9.40643 34.9937 9.90259C36.2531 12.6844 37.5199 15.4625 38.7494 18.2571C39.2914 19.4879 38.3744 20.7885 37.0087 20.8033C36.6598 20.8069 36.3016 20.8401 35.9648 20.7729C35.1747 20.6155 34.6924 20.1101 34.4788 19.3452C33.6569 16.4115 32.8332 13.4797 32.0095 10.546C31.8714 10.0526 31.7315 9.55924 31.5859 9.04007Z" fill="#24A562" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div><br></br>

        <div >
          <h1 style={{ float: 'left' }}><VolunteerActivismIcon sx={{ width: 50, fontSize: 40 }} />Top Partner</h1>
          <Link to='/toppartner' className='text-decoration-none'>
            <h4 className='top-partner-sell-all'>See All</h4>
          </Link>
        </div><br></br><br></br>


        {/* <div className='row top-partner-header'>
          {topPartner?.slice(0, 10).map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none link-top-partner'>

              <div style={{boxShadow: '0px 0px 15px #087c10', borderRadius: '20px 20px 20px 20px', width: '100%'}}>
              <img style={{ width: '100%', height: '112px',borderRadius: '10px 10px 10px 10px' }} src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              </div>

              <div>
              <p>{data.address === null ? '.....':data.address?.substring(0, 20)+'...'}</p>
              <p className='fw-bold' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name}</p>
              <p>{data.description === null ? '.....':data.description?.substring(0, 20)+'...'}</p>
              <p className='fw-bold' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>

            </Link>
          )}
        </div> */}
        
        {/* <div className='row '>
          {topPartner?.slice(0, 10).map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col ' style={{overflowX : 'scroll' }}>

              <div style={{boxShadow: '0px 0px 15px #087c10', borderRadius: '20px 20px 20px 20px'}}>
              <img style={{ width: '100%', height: '112px',borderRadius: '10px 10px 10px 10px' }} src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              </div>

              

            </Link>
          )}
        </div> */}
        {/* <div id="container-custom">
          <div id="objects-custom">
            {topPartner?.slice(0,10).map((data)=>{
              <div className="object-custom" key={data.id}>
                <img src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              </div>
            })}
    
          </div>
       </div> */}
       {/* {topPartner?.map((data)=>{
              <div  key={data.id}>
                <img src={data.gallary} alt="a" />
              </div>
            })} */}

        <div id='container-custom' className='top-partner-header'>
          <div id="objects-custom">
          {topPartner?.slice(0, 4).map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col text-decoration-none'>

              <div className='object-custom link-top-partner'>
              <img className='top-partner-image' src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              <div>
              <p className='top-partner-content'>{data.address === null ? '.....':data.address?.substring(0, 20)+'...'}</p>
              <p className='fw-bold top-partner-content' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name}</p>
              <p className='top-partner-content'>{data.description === null ? '.....':data.description?.substring(0, 20)+'...'}</p>
              <p className='fw-bold top-partner-content' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>
              </div>
              
            </Link>
          )}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default HomePage