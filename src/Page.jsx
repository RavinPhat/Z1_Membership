import React, { useEffect, useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from 'react-bootstrap/Accordion';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { LineStyle } from '@mui/icons-material';

const Page = () => {
  const [page, setPage] = useState([])
  useEffect(() => {
    getPage()
  }, []);
  const getPage = async () => {
    const resTopPartner = await axios.get('https://dev-z1m.z1platform.com/api/user/page/list',
      { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijg0MjcwM2EyZjUyMTJjODI4MTE4N2VlZTM3NjQ4ODA1Njk1ZTg0NmIyNGU0MWRjNjI1NTdiOGRkZDIyMWM4NTBmYjdiZWJmYTU0ZGU2NzMyIiwiaWF0IjoxNjY5MzYwNzE4Ljc4NjUxMywibmJmIjoxNjY5MzYwNzE4Ljc4NjUxNiwiZXhwIjoxNzI5MzYwNzE4Ljc4MTAyOCwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.Snv62PHgmV0LfwhUHpU3ZFJRzMzwMKXHN7PxHyBbLDJaCsuQNzcyvUUNFlDn8W-j9Xt7jvWq5m_91uNUeB4dZi9w3wQerybv7p8JUIiYMzCY-3oCbuFD6k5QoRzL0Kf5czKzrx2VQK47b1ixMwizuKGoGHvsFI33WCqz05gGa7_udgBViQrq5EfGn2SolCd0wa1VlGfK2TwCYNnxydkZ6fAo0fMDkp_tOGCtCgN2YOc67mLBdWFrNYNBgySwcDL1_kpbd6wwPiD5xVUVxDYFS0YamAOGF60waJ-H2fo1OWpCqMU04u3-r8-18yCEiH_rYh4DopRjs9HBO7cg7cWn8NyzGjDxjkzV6QQa_m5aRPf0LUsE1AnoCl51Y2xMWvr3Mf_wmwF8fr9p4hY48As-u30PeD8_zr3lisAHmnesvi3UBCjrb_EKEnmIz5ir7vslWCDMi4HmWH_wxCcPSmVL9D1DCUr0Z3zF-IlW0QJ5eMxXUMO1vHslc_FKzgS8KA3K5XPShBe6uyniDPrNwAYpeAKBUXc9Zphmbl9AnYCOwUZ-XyPB1POyWX-pcJb0eeRoGyZz7HGMHS2AyBdUj0KUZSMns141HoxiV5gZITKKOiMUurqRYYQU2cxwMQNBw_soYqm1sB9Wgromt1WVFnSiIxfwZ1d2WQhoO3_0AFNZ4yU' } })
    setPage(resTopPartner.data.data);
  }


  return (
    <>
      <div style={{ background: 'white',minHeight:'100vh'}}>
        <div className='d-flex justify-content-between' style={{paddingTop:'15px',paddingBottom:'15px', backgroundColor:'white'}}>
          <div>
          <DehazeIcon sx={{ width: 100, fontSize: 32 }} />
          <img style={{height:'36px'}} src={'./Horizontal.png'} />
          </div>
          <div>
          <Link to={'/homepage'} className='text-decoration-none'>
            <CloseIcon sx={{ width: 50, fontSize: 32 }} />
          </Link>
          </div>
        </div>
        <div style={{marginTop:'10px',marginLeft:'20px',marginRight:'20px'}}>
        <Accordion defaultActiveKey="0">
            {page?.map((data)=>(
                <Accordion.Item eventKey={data.id} key={data.id}>
                    <Accordion.Header><img src={data.icon} style={{height: '40px', paddingRight:'10px'}}></img> {data?.name}</Accordion.Header>
                    <Accordion.Body dangerouslySetInnerHTML={ {__html:data?.content}}>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Page