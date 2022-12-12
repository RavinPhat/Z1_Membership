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

          <Link to='/homepage' className='text-decoration-none'>
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
          <p className='top-10-partner'><VolunteerActivismIcon sx={{ width: 100, fontSize: 35 }} />Top 10 Partners of Z1M</p>
        </div><br></br><br></br>
        <div id='container-custom-10' className='top-10-partner-header'>
          <div id="objects-custom-10">
          {topPartner?.slice(0, 3).map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col text-decoration-none'>

              <div className='object-custom-10 link-top-10-partner'>
              <img className='top-10-partner-image' src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              <div>
              <p className='top-10-partner-content'>{data.address === null ? '.....':data.address?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name.substring(0, 10)}</p>
              <p className='top-10-partner-content'>{data.description === null ? '.....':data.description?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>
              </div>
              
            </Link>
          )}
          </div>
        </div>
        <div id='container-custom-10' className='top-10-partner-header'>
          <div id="objects-custom-10">
          {topPartner?.slice(3, 6).map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col text-decoration-none'>

              <div className='object-custom-10 link-top-10-partner'>
              <img className='top-10-partner-image' src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              <div>
              <p className='top-10-partner-content'>{data.address === null ? '.....':data.address?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name.substring(0, 10)+'...'}</p>
              <p className='top-10-partner-content'>{data.description === null ? '.....':data.description?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>
              </div>
              
            </Link>
          )}
          </div>
        </div>
        <div id='container-custom-10' className='top-10-partner-header'>
          <div id="objects-custom-10">
          {topPartner?.slice(6, 9).map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col text-decoration-none'>

              <div className='object-custom-10 link-top-10-partner'>
              <img className='top-10-partner-image' src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              <div>
              <p className='top-10-partner-content'>{data.address === null ? '.....':data.address?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name.substring(0, 10)}</p>
              <p className='top-10-partner-content'>{data.description === null ? '.....':data.description?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>
              </div>
              
            </Link>
          )}
          </div>
        </div>
        <div id='container-custom-10' className='top-10-partner-header'>
          <div id="objects-custom-10">
          {topPartner?.slice(9,10 ).map((data) =>
            <Link to={`/partner/${data.id}`} key={data.id} className='col text-decoration-none'>

              <div className='object-custom-10 link-top-10-partner'>
              <img className='top-10-partner-image' src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              <div>
              <p className='top-10-partner-content'>{data.address === null ? '.....':data.address?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name}</p>
              <p className='top-10-partner-content'>{data.description === null ? '.....':data.description?.substring(0, 10)+'...'}</p>
              <p className='fw-bold top-10-partner-content' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>
              </div>
              
            </Link>
          )}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default TopPartner