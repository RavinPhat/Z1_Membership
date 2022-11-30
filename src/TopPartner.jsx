import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link, Outlet } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import axios from 'axios';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const TopPartner = () => {
  const [homepageSlide, setHomepageSlide] = useState()
  const [topPartner, setTopPartner] = useState()
  useEffect(() => {
    getSlide()
    getTopPartner()
  }, []);
  const getSlide = async () => {
    const resSlide = await axios.get('https://dev-z1m.z1platform.com/api/user/slide/list?categories=our_partners',)
    setHomepageSlide(resSlide.data.data);
  }
  const getTopPartner = async () => {
    const resTopPartner = await axios.get('https://dev-z1m.z1platform.com/api/top-partner',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    console.log(resTopPartner.data.data);
    setTopPartner(resTopPartner.data.data);
  }


  return (
    <>
      <div style={{ background: 'white'}}>

        <div >

          <Link to='/'>
            <h1 style={{ float: 'left', marginBottom: '20px', marginTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />Top Partners</h1>
          </Link>

        </div>

        <div style={{ width: '90%', margin: '0 auto', marginTop: '10px', paddingTop: '30px' }}>
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

        <br></br>
        <div >
          <h1 style={{ float: 'left' }}><VolunteerActivismIcon sx={{ width: 100, fontSize: 40 }} />Top 10 Partners of Z1M</h1>
        </div><br></br>
        <div className='row' style={{ margin: '40px', background: 'white' }}>
          {topPartner?.map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2' style={{ border: '2px solid gray', borderRadius: '8px', margin: '5px' }}>
              <img style={{ width: '120px', height: '112px', objectFit: 'contain', }} src={data.gallary}></img>
              <p >{data.address}</p>
              <p className='fw-bold' style={{ color: 'Orange' }}>{data.name}</p>
              <p>{(data.description?.substring(0, 60))}</p>
              <p className='fw-bold' style={{ color: 'MediumSeaGreen' }}>Discount{data.discount}</p>
            </Link>
          )}
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default TopPartner