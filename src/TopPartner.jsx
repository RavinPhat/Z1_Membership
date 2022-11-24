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
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImM1YWY2ZWQwODFlYjYyNDZkOTRjYmQxMTQxNGNiZGQzMzczMjI0MTI3ZWNjYjM3YjIxYTlkMzVlNDQ2OTdkNDJlMDI0OTFmMjM0ZGQ3OTMzIiwiaWF0IjoxNjY4NjY5MDkzLjk2MTcxNywibmJmIjoxNjY4NjY5MDkzLjk2MTcyMSwiZXhwIjoxNzI4NjY5MDkzLjk0NTk2OCwic3ViIjoiMTE2Iiwic2NvcGVzIjpbXX0.SqfNb1PEFkNe9DqkZeR_NgEumZ2f95vxPmTlHDF3dlTjAOwy3I2n2crSU3jjhWGMpDOmNZDsgkK377M494K6B4JVJZwzFY4svIERSPHOqF_Fg9i--bpDN5iS_uRSQw_R7QR31ppiV_7RHssb-81k4-Vh1pWhttutkANH7IdeZnYq_tKYr_6U035nMTnT5PoLcFtJn0lt1aDw9_juIuu0nUKhxlEuES5t3VN9Xh1r857bJN31cYsLIKM_rLMX5VPFCBL8CR5pWszkSQ26Nkg6QL3-brVWIhFX-NS59IQ6lNJr5JrEIrj0ydi4PnslYdciTlgQO2o7UivDr7YlkylloKY18dR7zMVWhtiNoz4gxMy18WYVz832wcS14Mw9wvFpfwR9CmGCd32qpqQz3eATRtFlr5vabpLmWBLF4h6N6sDVlFn5oLk-CYAIkcXxHrK4dT615bfD623mwkiwi7sgDuHhF07a8INdttGzW_j3yH9svH7mcW7MrR7wy7oUkZbdOdBa7lLNgvc_bHOm28kcPBWVpPeGVEKnrJc9uJTQxhI6iHdasOPg23nz6w_X8bA_lDmEAdoxu1f0ja7-SFK0PQRU2h9k3LAarKo0yVA1R-eeIdz6FJPYlbivokGCgiQgXSrFoIM7juB1yorMguvNf5f1RJ3c28Su-Xknw7RGqk4' } })
    console.log(resTopPartner.data.data);
    setTopPartner(resTopPartner.data.data);
  }


  return (
    <>
      <div style={{ background: 'white' }}>

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