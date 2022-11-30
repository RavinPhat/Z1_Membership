import { margin } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

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
          <Link to='/ourpartner'>
            <h1 style={{marginBottom: '20px', paddingTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />{partner.category}</h1>
          </Link>
        </div>
        <div className='row' style={{ margin: '40px', background: 'white' }}>
            <div className='col d-flex flex-column justify-content-center align-items-center gap-2'>
                <img style={{ width: '100%', height: '100%', objectFit: 'contain', }} src={partner.gallary}></img>
            </div>
            <div>
            <h3 style={{marginBottom: '20px', paddingTop: '20px',marginLeft:'5%' }}>Detail Information</h3>
            </div>
            <div>
              <table>
                <tr >
                  <td>Title</td>
                  <td>:</td>
                  <td>{partner.name?.substring(0, 30)}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>:</td>
                  <td>{partner.description?.substring(0, 30)}</td>
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
        </div>
        {branch? 
        <>
        <div>
            <h3 style={{marginBottom: '20px', paddingTop: '20px',marginLeft:'10%' }}>Availble at</h3>
        </div>
        <div className='row' style={{ margin: '40px', background: 'white' }}>
          {branch?.map((data) =>
            <Link to={`/`} key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2' style={{ border: '2px solid gray', borderRadius: '8px', margin: '5px' }}>
              <img style={{ width: '120px', height: '112px', objectFit: 'contain', }} src={data.gallary}></img>
              <p className='fw-bold' style={{ color: 'Orange' }}>{data.name}</p>
              <p>{data.description.length >= 20 ? data.description?.substring(0, 20)+'...':data.description}</p>
              <p className='fw-bold' style={{ color: 'MediumSeaGreen' }}>Discount {data.discount}</p>
            </Link>
          )}
        </div>
        </>
        :null}
        
    <Outlet />  
    </div>
  )
}

export default Partner