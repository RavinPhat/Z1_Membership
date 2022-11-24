import { margin } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Advisory = () => {
const [categoryPartner, setCategoryPartner] = useState()
const {id} = useParams();


useEffect(() => {
  const getCategoryPartner =async()=>{
  const req = await axios.get(`https://dev-z1m.z1platform.com/api/partner/${id}`,
  { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImM1YWY2ZWQwODFlYjYyNDZkOTRjYmQxMTQxNGNiZGQzMzczMjI0MTI3ZWNjYjM3YjIxYTlkMzVlNDQ2OTdkNDJlMDI0OTFmMjM0ZGQ3OTMzIiwiaWF0IjoxNjY4NjY5MDkzLjk2MTcxNywibmJmIjoxNjY4NjY5MDkzLjk2MTcyMSwiZXhwIjoxNzI4NjY5MDkzLjk0NTk2OCwic3ViIjoiMTE2Iiwic2NvcGVzIjpbXX0.SqfNb1PEFkNe9DqkZeR_NgEumZ2f95vxPmTlHDF3dlTjAOwy3I2n2crSU3jjhWGMpDOmNZDsgkK377M494K6B4JVJZwzFY4svIERSPHOqF_Fg9i--bpDN5iS_uRSQw_R7QR31ppiV_7RHssb-81k4-Vh1pWhttutkANH7IdeZnYq_tKYr_6U035nMTnT5PoLcFtJn0lt1aDw9_juIuu0nUKhxlEuES5t3VN9Xh1r857bJN31cYsLIKM_rLMX5VPFCBL8CR5pWszkSQ26Nkg6QL3-brVWIhFX-NS59IQ6lNJr5JrEIrj0ydi4PnslYdciTlgQO2o7UivDr7YlkylloKY18dR7zMVWhtiNoz4gxMy18WYVz832wcS14Mw9wvFpfwR9CmGCd32qpqQz3eATRtFlr5vabpLmWBLF4h6N6sDVlFn5oLk-CYAIkcXxHrK4dT615bfD623mwkiwi7sgDuHhF07a8INdttGzW_j3yH9svH7mcW7MrR7wy7oUkZbdOdBa7lLNgvc_bHOm28kcPBWVpPeGVEKnrJc9uJTQxhI6iHdasOPg23nz6w_X8bA_lDmEAdoxu1f0ja7-SFK0PQRU2h9k3LAarKo0yVA1R-eeIdz6FJPYlbivokGCgiQgXSrFoIM7juB1yorMguvNf5f1RJ3c28Su-Xknw7RGqk4' } })
  console.log(req.data.data)
  setCategoryPartner(req.data.data)}
  getCategoryPartner()
}, [])

  return (
     <div style={{ background: 'white' }}>
        <div>
          <Link to='/ourpartner'>
            <h1 style={{marginBottom: '20px', paddingTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />
            {categoryPartner?.slice(0,1).map((data) => data?.category)}
            </h1>
          </Link>
        </div>
        <div className='row' style={{ margin: '40px', background: 'white' }}>
            {categoryPartner?.map((data) =>
              <Link to={`/partner/${data.id}`} key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2' style={{ border: '2px solid gray', borderRadius: '8px', margin: '5px', padding: '5px' }}>
                <img style={{ width: '120px', height: '112px', objectFit: 'contain', }} src={data.gallary}></img>
                <p className='fw-bold' style={{ color: 'Orange' }}>{data.name?.substring(0, 30)}</p>
                <p className='fw-bold' style={{ color: 'MediumSeaGreen' }}>{data.description?.substring(0, 60)}</p>
              </Link>
            )}
        </div>
    <Outlet />  
    </div>
  )
}

export default Advisory