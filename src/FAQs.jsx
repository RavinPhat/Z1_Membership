import { margin } from '@mui/system';
import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Accordion from 'react-bootstrap/Accordion';
import { Clear } from '@mui/icons-material';
import Swal from 'sweetalert2';

const FAQs = () => {
    const [faqs, setFAQS] = useState([])

    useEffect(() => {

        const getFAQS = async () => {
            const req = await axios.get('https://dev-z1m.z1platform.com/api/user/get/faqs',
                { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijg0MjcwM2EyZjUyMTJjODI4MTE4N2VlZTM3NjQ4ODA1Njk1ZTg0NmIyNGU0MWRjNjI1NTdiOGRkZDIyMWM4NTBmYjdiZWJmYTU0ZGU2NzMyIiwiaWF0IjoxNjY5MzYwNzE4Ljc4NjUxMywibmJmIjoxNjY5MzYwNzE4Ljc4NjUxNiwiZXhwIjoxNzI5MzYwNzE4Ljc4MTAyOCwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.Snv62PHgmV0LfwhUHpU3ZFJRzMzwMKXHN7PxHyBbLDJaCsuQNzcyvUUNFlDn8W-j9Xt7jvWq5m_91uNUeB4dZi9w3wQerybv7p8JUIiYMzCY-3oCbuFD6k5QoRzL0Kf5czKzrx2VQK47b1ixMwizuKGoGHvsFI33WCqz05gGa7_udgBViQrq5EfGn2SolCd0wa1VlGfK2TwCYNnxydkZ6fAo0fMDkp_tOGCtCgN2YOc67mLBdWFrNYNBgySwcDL1_kpbd6wwPiD5xVUVxDYFS0YamAOGF60waJ-H2fo1OWpCqMU04u3-r8-18yCEiH_rYh4DopRjs9HBO7cg7cWn8NyzGjDxjkzV6QQa_m5aRPf0LUsE1AnoCl51Y2xMWvr3Mf_wmwF8fr9p4hY48As-u30PeD8_zr3lisAHmnesvi3UBCjrb_EKEnmIz5ir7vslWCDMi4HmWH_wxCcPSmVL9D1DCUr0Z3zF-IlW0QJ5eMxXUMO1vHslc_FKzgS8KA3K5XPShBe6uyniDPrNwAYpeAKBUXc9Zphmbl9AnYCOwUZ-XyPB1POyWX-pcJb0eeRoGyZz7HGMHS2AyBdUj0KUZSMns141HoxiV5gZITKKOiMUurqRYYQU2cxwMQNBw_soYqm1sB9Wgromt1WVFnSiIxfwZ1d2WQhoO3_0AFNZ4yU' } })
            setFAQS(req.data.data)
        }
        getFAQS()
    }, [])

    return (
        <div style={{ background: 'white' , position:'relative'}}>
            <div>
                <Link to='/membershipprivileges'>
                    <h1 style={{ marginBottom: '20px', paddingTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />Membership Privileges</h1>
                </Link>
            </div>
            <div>
                <h3 style={{ marginBottom: '20px', paddingTop: '20px', marginLeft: '5%', float:'left' }}>Faculty Quality Assurance System (FQAS)</h3>
            </div>

            <div style={{margin:'5%',marginTop:'15%'}}>
                <Accordion defaultActiveKey="0">
                {faqs.map((data)=>(

                    <Accordion.Item eventKey={data.id} key={data.id}>
                        <Accordion.Header>{data.question}</Accordion.Header>
                        <Accordion.Body>
                            {data.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
            </div><br></br>
            <Outlet />
        </div>
    )
}

export default FAQs