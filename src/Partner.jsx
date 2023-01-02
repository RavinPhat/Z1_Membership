import { margin } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Partner = () => {
const [partner, setPartner] = useState({})
const [branch,setBranch] = useState()
const {id} = useParams();


useEffect(() => {
  const getPartner =async()=>{
  const req = await axios.get(`https://dev-z1m.z1platform.com/api/partner-detail/${id}`,
  { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
  setPartner(req.data.data)}
  getPartner()

  const getBranch =async()=>{
    const req = await axios.get(`https://dev-z1m.z1platform.com/api/top-partner/${id}`,
    { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijk2ZTRjYjZmMzVjMDMwY2VhNTVmMTAyYzJhMDljZmE1NTgzNzkzZTRiMjNhZmRiODVmYWIwMzg0MjFiNWFlMTlmMjg2ZTNkNDMwOTI1MjQ5IiwiaWF0IjoxNjY5MzYwMjMwLjY5MjA1OCwibmJmIjoxNjY5MzYwMjMwLjY5MjA2MiwiZXhwIjoxNzI5MzYwMjMwLjY4NjExMiwic3ViIjoiNjYiLCJzY29wZXMiOltdfQ.cyqAhfH-l8LM81nWmq7yPvWp8GsexnuOnUHFW5CFhgpaYq4b8kNV0077yEy4lw5WBU88wlV41Cj-m5tGkLgMdpzjyAMkKkri_18x1pBJwoo-q4By_ozCc4PIJRMa5V9rHDejXjyMMd0zDTwRQiC2Iibtanl8N3zC1KoFIrlbx9rfb6fxIfTDsNvuA_a0nC3ptewi3LRxoIjTPw15mx0YP3XeG9tFqLwUkBcRvUkuSmloP5eCgxEsx5USfy3yMnocR19BQD4MTldSQGme9-vQfssp-1ryLniBUGzc3bnl8bh6sgCdNtBy6dTXWx4cWwcCpRO-TLrqWn9pu-lBZkhPgucbngXk5_y_qdIC4mCBbCrCDG16D8EFJL3KFSnLqucxX_uyRVwJEbjsceF9LiSa4y9aMTU1DTHwY7RLoiDuhxqx9o9q1S5CR7gIABDNo0VulbTJpB26DUeQ1lyFKjEyVgx-_ooMKHjNiT4BvBrno3KPvcTdeCcj6BPzuT3sDQVIASihPV-qTqoh2npqomzE-N6klan-CwBdO5iN0ToIn-ue1viE7FUmuqPyo242cf8pA6Q4sazSXMXRleEkGCnxJ21mz2T7A3IEOvPCJQcirsSjP7Mg9om3TLIwiPS5-vkziZr96aL8B1PmMvklNsMXJMGuQtw-9RGQWpr5DWOqBTo' } })
    setBranch(req.data.data)}
    getBranch()
}, [])

  return (

     <div style={{ background: 'white'}}>
        <div>
          <Link to='/ourpartner' className='text-decoration-none'>
            <h1 style={{marginBottom: '20px', paddingTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />{partner.category}</h1>
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
            {partner.gallary?.map((data) =>
            
              <SwiperSlide>
                <img src={data} alt={data} />
                </SwiperSlide>
            )}

          </Swiper>

        </div>
        <div className='row' style={{ margin: '40px', background: 'white' }}>
            <div className='col d-flex flex-column justify-content-center align-items-center gap-2'>
                {/* <img style={{ width: '100%', height: '100%', objectFit: 'contain', }} src={partner.gallary}></img> */}
            </div>
            <div>
            <h3 style={{marginBottom: '20px', paddingTop: '20px',marginLeft:'5%' }}>Detail Information</h3>
            </div>
        </div>
        <div style={{ margin: '40px', background: 'white' }}>
          <table>
            <tr >
              <td>Title</td>
              <td>:</td>
              <td>{partner.name?.substring(0, 30)}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>:</td>
              <td>{partner.description === null ? '.....':partner.description?.substring(0, 40)+'...'}</td>
            </tr>
            <tr>
              <td>Promotion (Discount) </td>
              <td>:</td>
              <td>{partner.discount?.substring(0, 30)}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>:</td>
              <td>{partner.phone?.substring(0, 30)}</td>
            </tr>
          </table>
        </div>
        {branch? 
        <>
        <div>
            <h3 style={{marginBottom: '20px', paddingTop: '20px',marginLeft:'10%' }}>Availble at</h3>
        </div>
        <div className='row' style={{ marginLeft: '1rem',marginRight: '2rem',marginTop: '2rem',paddingBottom:'20px', background: 'white', }}>
          {branch?.map((data) =>
            // <Link to={`/partner/${data.id}`} key={data.id} className='col-11 d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none' style={{ margin: '30px',boxShadow: '0px 0px 15px #087c10', borderRadius: '10px 10px 10px 10px' }}>
            <Link to={`/partner/${data.id}`} key={data.id} className='col-11 d-flex flex-column gap-2 text-decoration-none' style={{ margin: '30px',boxShadow: '0px 0px 15px #087c10', borderRadius: '10px 10px 10px 10px' }}>
              
              <div style={{boxShadow: '0px 0px 15px #087c10', borderRadius: '20px 20px 20px 20px',width: '100%'}}>
              <img style={{ width: '100%', height: '112px',borderRadius: '10px 10px 10px 10px' }} src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              </div>

              <div style={{paddingLeft:'2rem'}}>
              <p>{data.address === null ? '.....':data.address?.substring(0, 40)+'...'}</p>
              <p className='fw-bold' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name}</p>
              <p>{data.description === null ? '.....':data.description?.substring(0, 40)+'...'}</p>
              <p className='fw-bold' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>

            </Link>
          )}
        </div>
        {/* <div id='container-custom' className='partner-header'>
          <div id="objects-custom">
          {branch?.map((data) =>
            <div key={data.id} className='col text-decoration-none'>

              <div className='object-custom link-top-partner'>
              <img className='partner-image' src={(data?.gallary?.length < 1 ?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/271px-Picture_icon_BLACK.svg.png':data.gallary)}></img>
              <div>
              <p className='partner-content'>{data.address === null ? '.....':data.address?.substring(0, 20)+'...'}</p>
              <p className='fw-bold partner-content' style={{ color: 'Orange' }}>{data.name ===''? '.....':data.name}</p>
              <p className='partner-content'>{data.description === null ? '.....':data.description?.substring(0, 20)+'...'}</p>
              <p className='fw-bold partner-content' style={{ color: 'MediumSeaGreen' }}>{data.discount === null ? '.....':data.discount}</p>
              </div>
              </div>
              
            </div>
          )}
          </div>
        </div> */}
        </>
        :null}
        
    <Outlet />  
    </div>
  )
}

export default Partner