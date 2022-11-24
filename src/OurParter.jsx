import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link, Outlet } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import axios from 'axios';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const OurPartner = () => {
    const [homepageSlide, setHomepageSlide] = useState()
    const [specialSlide, setSpecialSlide] = useState()
    const [categoryPartner, setCategoryPartner] = useState()
    useEffect(() => {
        getSlide()
        getSpecialSlide()
        getCategoryPartner()
    }, []);
    const getSlide = async () => {
        const resSlide = await axios.get('https://dev-z1m.z1platform.com/api/user/slide/list?categories=our_partners',)
        setHomepageSlide(resSlide.data.data);
    }
    const getSpecialSlide = async () => {
        const resSlide = await axios.get('https://dev-z1m.z1platform.com/api/user/slide/list?categories=special_offers',)
        setSpecialSlide(resSlide.data.data);
    }
    const getCategoryPartner = async () => {
        const resCategoryPartner  = await axios.get('https://dev-z1m.z1platform.com/api/partner',
          { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImM1YWY2ZWQwODFlYjYyNDZkOTRjYmQxMTQxNGNiZGQzMzczMjI0MTI3ZWNjYjM3YjIxYTlkMzVlNDQ2OTdkNDJlMDI0OTFmMjM0ZGQ3OTMzIiwiaWF0IjoxNjY4NjY5MDkzLjk2MTcxNywibmJmIjoxNjY4NjY5MDkzLjk2MTcyMSwiZXhwIjoxNzI4NjY5MDkzLjk0NTk2OCwic3ViIjoiMTE2Iiwic2NvcGVzIjpbXX0.SqfNb1PEFkNe9DqkZeR_NgEumZ2f95vxPmTlHDF3dlTjAOwy3I2n2crSU3jjhWGMpDOmNZDsgkK377M494K6B4JVJZwzFY4svIERSPHOqF_Fg9i--bpDN5iS_uRSQw_R7QR31ppiV_7RHssb-81k4-Vh1pWhttutkANH7IdeZnYq_tKYr_6U035nMTnT5PoLcFtJn0lt1aDw9_juIuu0nUKhxlEuES5t3VN9Xh1r857bJN31cYsLIKM_rLMX5VPFCBL8CR5pWszkSQ26Nkg6QL3-brVWIhFX-NS59IQ6lNJr5JrEIrj0ydi4PnslYdciTlgQO2o7UivDr7YlkylloKY18dR7zMVWhtiNoz4gxMy18WYVz832wcS14Mw9wvFpfwR9CmGCd32qpqQz3eATRtFlr5vabpLmWBLF4h6N6sDVlFn5oLk-CYAIkcXxHrK4dT615bfD623mwkiwi7sgDuHhF07a8INdttGzW_j3yH9svH7mcW7MrR7wy7oUkZbdOdBa7lLNgvc_bHOm28kcPBWVpPeGVEKnrJc9uJTQxhI6iHdasOPg23nz6w_X8bA_lDmEAdoxu1f0ja7-SFK0PQRU2h9k3LAarKo0yVA1R-eeIdz6FJPYlbivokGCgiQgXSrFoIM7juB1yorMguvNf5f1RJ3c28Su-Xknw7RGqk4' } })
          setCategoryPartner(resCategoryPartner .data.data);
      }


    return (
        <>
            <div style={{ background: 'white' }}>

                <div >

                    <Link to='/'>
                        <h1 style={{ float: 'left', marginBottom: '20px', marginTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />Our Partners</h1>
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

                </div><br></br>

                <div className='d-flex flex-column'>
                    <div>

                        <h1>
                            <VolunteerActivismIcon sx={{ width: 100, fontSize: 40 }} />Special Offers & Discout
                        </h1>
                    </div>
                    <div className='row' style={{ background: 'white', padding: '20px' }}>
                        {specialSlide?.map((data) =>
                            <div className='col-4 d-flex justify-content-center' key={data.id}>
                                <img src={data.image}></img>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                <h1><VolunteerActivismIcon sx={{ width: 100, fontSize: 40 }} />Our Partner By Category</h1>
                </div>

                <div className='row' style={{ margin: '40px', background: 'white' }}>
                    {categoryPartner?.slice(0,1).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(1,2).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(2,3).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(3,4).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(4,5).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(5,6).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(6,7).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(7,8).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(8,9).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(9,10).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(10,11).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                    {categoryPartner?.slice(11,12).map((data) =>
                        <Link to={`/categorypartner/${data.id}`} key={data.id} className='col-4 d-flex flex-column justify-content-center align-items-center gap-2' style={{ padding: '10px' }}>
                        <img style={{ width: '120px', height: '112px', objectFit: 'contain' }} src={data.icon}></img>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2'>{data.name}</p>
                        <p className='col d-flex flex-column justify-content-center align-items-center gap-2 fw-bold'>{data.category_partners_count} Partners</p>
                        </Link>
                        
                    )}
                </div>

                <Outlet />
            </div>
        </>
    )
}

export default OurPartner