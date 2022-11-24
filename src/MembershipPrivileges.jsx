import { margin } from '@mui/system';
import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Accordion from 'react-bootstrap/Accordion';
import { ZoomInMap } from '@mui/icons-material';
import { Clear } from '@mui/icons-material';
import Swal from 'sweetalert2';
import Profile from './Profile';
import Name from './Name';

const MembershipPrivileges = () => {
    const [member, setMember] = useState([])
    const [faqs, setFAQS] = useState([])
    const [isModal , setIsModal] = useState(false)
    const [description, setDescription] = useState('')

    useEffect(() => {
        // const getMember = async () => {
        //     const req = await axios.get('https://dev-z1m.z1platform.com/api/contact/by/user',
        //         { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImM1YWY2ZWQwODFlYjYyNDZkOTRjYmQxMTQxNGNiZGQzMzczMjI0MTI3ZWNjYjM3YjIxYTlkMzVlNDQ2OTdkNDJlMDI0OTFmMjM0ZGQ3OTMzIiwiaWF0IjoxNjY4NjY5MDkzLjk2MTcxNywibmJmIjoxNjY4NjY5MDkzLjk2MTcyMSwiZXhwIjoxNzI4NjY5MDkzLjk0NTk2OCwic3ViIjoiMTE2Iiwic2NvcGVzIjpbXX0.SqfNb1PEFkNe9DqkZeR_NgEumZ2f95vxPmTlHDF3dlTjAOwy3I2n2crSU3jjhWGMpDOmNZDsgkK377M494K6B4JVJZwzFY4svIERSPHOqF_Fg9i--bpDN5iS_uRSQw_R7QR31ppiV_7RHssb-81k4-Vh1pWhttutkANH7IdeZnYq_tKYr_6U035nMTnT5PoLcFtJn0lt1aDw9_juIuu0nUKhxlEuES5t3VN9Xh1r857bJN31cYsLIKM_rLMX5VPFCBL8CR5pWszkSQ26Nkg6QL3-brVWIhFX-NS59IQ6lNJr5JrEIrj0ydi4PnslYdciTlgQO2o7UivDr7YlkylloKY18dR7zMVWhtiNoz4gxMy18WYVz832wcS14Mw9wvFpfwR9CmGCd32qpqQz3eATRtFlr5vabpLmWBLF4h6N6sDVlFn5oLk-CYAIkcXxHrK4dT615bfD623mwkiwi7sgDuHhF07a8INdttGzW_j3yH9svH7mcW7MrR7wy7oUkZbdOdBa7lLNgvc_bHOm28kcPBWVpPeGVEKnrJc9uJTQxhI6iHdasOPg23nz6w_X8bA_lDmEAdoxu1f0ja7-SFK0PQRU2h9k3LAarKo0yVA1R-eeIdz6FJPYlbivokGCgiQgXSrFoIM7juB1yorMguvNf5f1RJ3c28Su-Xknw7RGqk4' } })
        //     setMember(req.data.data)
        // }
        // getMember()

        // const getFAQS = async () => {
        //     const req = await axios.get('https://dev-z1m.z1platform.com/api/user/get/faqs',
        //         { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImM1YWY2ZWQwODFlYjYyNDZkOTRjYmQxMTQxNGNiZGQzMzczMjI0MTI3ZWNjYjM3YjIxYTlkMzVlNDQ2OTdkNDJlMDI0OTFmMjM0ZGQ3OTMzIiwiaWF0IjoxNjY4NjY5MDkzLjk2MTcxNywibmJmIjoxNjY4NjY5MDkzLjk2MTcyMSwiZXhwIjoxNzI4NjY5MDkzLjk0NTk2OCwic3ViIjoiMTE2Iiwic2NvcGVzIjpbXX0.SqfNb1PEFkNe9DqkZeR_NgEumZ2f95vxPmTlHDF3dlTjAOwy3I2n2crSU3jjhWGMpDOmNZDsgkK377M494K6B4JVJZwzFY4svIERSPHOqF_Fg9i--bpDN5iS_uRSQw_R7QR31ppiV_7RHssb-81k4-Vh1pWhttutkANH7IdeZnYq_tKYr_6U035nMTnT5PoLcFtJn0lt1aDw9_juIuu0nUKhxlEuES5t3VN9Xh1r857bJN31cYsLIKM_rLMX5VPFCBL8CR5pWszkSQ26Nkg6QL3-brVWIhFX-NS59IQ6lNJr5JrEIrj0ydi4PnslYdciTlgQO2o7UivDr7YlkylloKY18dR7zMVWhtiNoz4gxMy18WYVz832wcS14Mw9wvFpfwR9CmGCd32qpqQz3eATRtFlr5vabpLmWBLF4h6N6sDVlFn5oLk-CYAIkcXxHrK4dT615bfD623mwkiwi7sgDuHhF07a8INdttGzW_j3yH9svH7mcW7MrR7wy7oUkZbdOdBa7lLNgvc_bHOm28kcPBWVpPeGVEKnrJc9uJTQxhI6iHdasOPg23nz6w_X8bA_lDmEAdoxu1f0ja7-SFK0PQRU2h9k3LAarKo0yVA1R-eeIdz6FJPYlbivokGCgiQgXSrFoIM7juB1yorMguvNf5f1RJ3c28Su-Xknw7RGqk4' } })
        //     console.log(req.data.data);
        //     setFAQS(req.data.data)
        // }
        // getFAQS()
        const getMember = async () => {
            const req = await axios.get('https://dev-z1m.z1platform.com/api/contact/by/user',
                { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImNlYmExNWNhNzEwYTk0N2FmM2NkMDVhMTU3NzQ1ZGU4NDg3NjJhMzcwZTY5OTFjZmIwZDcyMDNkMjlkODFiMTUyMjk5OWY1NDkwY2VhZjhlIiwiaWF0IjoxNjY5MjU4NzE3Ljc0MzI0NiwibmJmIjoxNjY5MjU4NzE3Ljc0MzI1MSwiZXhwIjoxNzI5MjU4NzE3LjcyNjI0Niwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.R-mLFXhuY8tqfgHVKyFNwdZW8MsgPpcvnrmJt40uVfmxXsZHyQ-aq2wbYmHAuFpTliSl1ghuvih2rzBFvVIU7dOO_2TIJb5lXVJ1k8xnRS-r9TxYF0BSEhsd6ONYlMPSJDYDLltYxpI5QmIpm1C8lw4QPMZU05IXkOGo7hmqwP78JaVKIF6YkMYltU-mMABG5b-86r2aDYATXjSSVDElTcEBZwVHl8f3jsck6N3mSkteNQunF-GSWrVimPYvpZtiJlgkr90DdBS6ULli4avdNCtGsJInWot_J2_7-L9Yhcu0nAwuq1DnFhr11hX8647Iv20zaMLPHw7LogbCRUEvlg04JIpL5WUsjWDG11NBcdKPPN-nNNbH3zpm2UmMSQsGCEg4mwbFPA3-LgE-jtTUiczF9rQhw4wHMn4vkvgaJG3w18zJKe8PeVUBNd3p5qL5AGAVDSPe6Y1ajdi5SR4D2X5e_F8qVFC1TKwUi-3YopWYkJj2fouJhBYWM46t9PoD1dPcmu-w4oPIY3Yv5SYCRytJmzE5oAfJbmOOE8lAD5ovgoJsMEFHB9WLaDZrayMLJK0cgn27ypgxVHaG__Vgj6o-vJ4aIRlCi4MKC33GDtMiElz804tWKUulo1rNOqguG52AEhwE_q_u-I5gQhtBDyk4rUMZUACNiutWkqzghmg' } })
            console.log(req.data.data);
            setMember(req.data.data)
        }
        getMember()

        const getFAQS = async () => {
            const req = await axios.get('https://dev-z1m.z1platform.com/api/user/get/faqs',
                { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImNlYmExNWNhNzEwYTk0N2FmM2NkMDVhMTU3NzQ1ZGU4NDg3NjJhMzcwZTY5OTFjZmIwZDcyMDNkMjlkODFiMTUyMjk5OWY1NDkwY2VhZjhlIiwiaWF0IjoxNjY5MjU4NzE3Ljc0MzI0NiwibmJmIjoxNjY5MjU4NzE3Ljc0MzI1MSwiZXhwIjoxNzI5MjU4NzE3LjcyNjI0Niwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.R-mLFXhuY8tqfgHVKyFNwdZW8MsgPpcvnrmJt40uVfmxXsZHyQ-aq2wbYmHAuFpTliSl1ghuvih2rzBFvVIU7dOO_2TIJb5lXVJ1k8xnRS-r9TxYF0BSEhsd6ONYlMPSJDYDLltYxpI5QmIpm1C8lw4QPMZU05IXkOGo7hmqwP78JaVKIF6YkMYltU-mMABG5b-86r2aDYATXjSSVDElTcEBZwVHl8f3jsck6N3mSkteNQunF-GSWrVimPYvpZtiJlgkr90DdBS6ULli4avdNCtGsJInWot_J2_7-L9Yhcu0nAwuq1DnFhr11hX8647Iv20zaMLPHw7LogbCRUEvlg04JIpL5WUsjWDG11NBcdKPPN-nNNbH3zpm2UmMSQsGCEg4mwbFPA3-LgE-jtTUiczF9rQhw4wHMn4vkvgaJG3w18zJKe8PeVUBNd3p5qL5AGAVDSPe6Y1ajdi5SR4D2X5e_F8qVFC1TKwUi-3YopWYkJj2fouJhBYWM46t9PoD1dPcmu-w4oPIY3Yv5SYCRytJmzE5oAfJbmOOE8lAD5ovgoJsMEFHB9WLaDZrayMLJK0cgn27ypgxVHaG__Vgj6o-vJ4aIRlCi4MKC33GDtMiElz804tWKUulo1rNOqguG52AEhwE_q_u-I5gQhtBDyk4rUMZUACNiutWkqzghmg' } })
            //console.log(req.data.data);
            setFAQS(req.data.data)
        }
        getFAQS()
    }, [])

    const onSubmitTask = async (e) => {
        e.preventDefault();
        if(!description) {
            Swal.fire({
                title: 'Please Input Your Feedback !!!!',
                icon: 'error',
                timer: 2000,
            });
            return;
        }
        const result = description;
        setDescription('')
        if(result){
            console.log(result);
            console.log();
            const res = await axios.post('https://dev-z1m.z1platform.com/api/user/feedback/create', 
                {
                    category: "Natural Park",
                    description: result
                },
                {headers: {
                    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImNlYmExNWNhNzEwYTk0N2FmM2NkMDVhMTU3NzQ1ZGU4NDg3NjJhMzcwZTY5OTFjZmIwZDcyMDNkMjlkODFiMTUyMjk5OWY1NDkwY2VhZjhlIiwiaWF0IjoxNjY5MjU4NzE3Ljc0MzI0NiwibmJmIjoxNjY5MjU4NzE3Ljc0MzI1MSwiZXhwIjoxNzI5MjU4NzE3LjcyNjI0Niwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.R-mLFXhuY8tqfgHVKyFNwdZW8MsgPpcvnrmJt40uVfmxXsZHyQ-aq2wbYmHAuFpTliSl1ghuvih2rzBFvVIU7dOO_2TIJb5lXVJ1k8xnRS-r9TxYF0BSEhsd6ONYlMPSJDYDLltYxpI5QmIpm1C8lw4QPMZU05IXkOGo7hmqwP78JaVKIF6YkMYltU-mMABG5b-86r2aDYATXjSSVDElTcEBZwVHl8f3jsck6N3mSkteNQunF-GSWrVimPYvpZtiJlgkr90DdBS6ULli4avdNCtGsJInWot_J2_7-L9Yhcu0nAwuq1DnFhr11hX8647Iv20zaMLPHw7LogbCRUEvlg04JIpL5WUsjWDG11NBcdKPPN-nNNbH3zpm2UmMSQsGCEg4mwbFPA3-LgE-jtTUiczF9rQhw4wHMn4vkvgaJG3w18zJKe8PeVUBNd3p5qL5AGAVDSPe6Y1ajdi5SR4D2X5e_F8qVFC1TKwUi-3YopWYkJj2fouJhBYWM46t9PoD1dPcmu-w4oPIY3Yv5SYCRytJmzE5oAfJbmOOE8lAD5ovgoJsMEFHB9WLaDZrayMLJK0cgn27ypgxVHaG__Vgj6o-vJ4aIRlCi4MKC33GDtMiElz804tWKUulo1rNOqguG52AEhwE_q_u-I5gQhtBDyk4rUMZUACNiutWkqzghmg',
                }})
            .then( ( {data} ) =>  {
                console.log(data)
                Swal.fire({
                    title: 'Thanks For Your Feedback, Love You !!!',
                    icon: 'success',
                    timer: 2000,
                });
                return data;
            } )
            .catch(function (error) {
                console.log(error);
            })
            return res;
        }
    }

    return (
        <div style={{ background: 'white' , position:'relative'}}>
            <div>
                <Link to='/'>
                    <h1 style={{ marginBottom: '20px', paddingTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />Home Pages</h1>
                </Link>
            </div>
            <div style={{ marginLeft: '5%', marginRight: '5%', textAlign: 'center', background:'green', padding:'100px', backgroundSize: '100%',backgroundImage:'url(./BackgroundProfile.png)' }}>
                {/* <div style={{ backgroundSize: '100%',backgroundImage:'url(./BackgroundProfile.png)' }}> */}
                <div className='position-relative'>
                    <Profile />    
                <img className='position-absolute top-50 start-50 translate-middle-custom'  src={member.avatar} style={{ height: '145px', borderRadius: '999px', textAlign:'center', marginBottom:'10px' }}></img>
                <div className='position-absolute bottom-0 translate-bottom-cs'><Name /></div>
                <p className='position-absolute bottom-0 translate-bottom-name' style={{fontSize:'16px',color:'white'}}>{member.first_name} {member.last_name}</p>
                </div>
                {/* </div> */}
            </div>

            <div>
                <h3 style={{ marginBottom: '20px', paddingTop: '20px', marginLeft: '5%' }}>Detail Information</h3>
            </div>

            <div style={{ marginLeft: '10%' }}>
                <table>
                    <tr >
                        <td>Name</td>
                        <td>:</td>
                        <td>{member.first_name} {member.last_name}</td>
                    </tr>
                    <tr >
                        <td>Email</td>
                        <td>:</td>
                        <td>{member.email}</td>
                    </tr>
                    <tr >
                        <td>Membership ID</td>
                        <td>:</td>
                        <td>{member.member_id}</td>
                    </tr>
                    <tr >
                        <td>Contact</td>
                        <td>:</td>
                        <td>{member.phone}</td>
                    </tr>
                    <tr >
                        <td>Company</td>
                        <td>:</td>
                        <td>{member.company_name}</td>
                    </tr>
                    <tr >
                        <td>Position</td>
                        <td>:</td>
                        <td>{member.position}</td>
                    </tr>
                    <tr >
                        <td>Validation Date</td>
                        <td>:</td>
                        <td>{member.validate}</td>
                    </tr>
                </table>
            </div>

            {member.membership_name && 
            <div>
                <h3 style={{ marginBottom: '20px', paddingTop: '20px', marginLeft: '5%' }}>Membership Plan : 
                    <span style={{ marginBottom: '20px', padding: '10px', marginLeft: '5%',marginRight:'3%', background:'green' ,color:'white' ,border:'white',borderRadius: '99px'}}>
                        {member.membership_name}
                    </span>
                </h3>
            </div>
            }
            {member.benefits && 
            <h3 style={{ marginBottom: '20px', paddingTop: '20px', marginLeft: '5%' }}>Benefit, we offred</h3>
            }

           <div className='row' style={{ margin: '20px', background: 'white' }}>
                {member.benefits?.map((data) =>
                    <div key={data.id} className='col d-flex flex-column justify-content-center align-items-center gap-2' style={{ border: '2px solid gray', borderRadius: '8px', margin: '5px' }}>
                    <img style={{ width: '120px', height: '112px', objectFit: 'contain', }} src={data.icon}></img>
                    <p >{data.address}</p>
                    <p className='fw-bold' style={{ color: 'Orange' }}>{data.name}</p>
                    <p>{(data.description?.substring(0, 60))}</p>
                    </div>
                )}
            </div>

            <div>
                <h3 style={{ marginBottom: '20px', paddingTop: '20px', marginLeft: '5%', float:'left' }}>FAQs</h3>
                <button style={{ marginBottom: '20px', padding: '10px', marginLeft: '5%',marginRight:'3%', float:'right', background:'green' ,color:'white' ,border:'white',borderRadius: '99px'}} onClick={()=> setIsModal(!isModal)}>See All FAQS</button>
            </div>

            
            <div style={{margin:'5%',marginTop:'15%'}}>
                <Accordion defaultActiveKey="0">
                {faqs.slice(0,4).map((data)=>(

                    <Accordion.Item eventKey={data.id} key={data.id}>
                        <Accordion.Header>{data.question}</Accordion.Header>
                        <Accordion.Body>
                            {data.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>

                <div>

                </div>
                <div style={{textAlign: 'center'}}>
                <Link type="button" onClick={()=> setIsModal(true)}>
                    <p>See All FAQS</p>
                </Link>
                </div>

                {isModal ? <div style={{position:'absolute' , top:'0px' , left:'0', right:'0', marginLeft:'auto', marginRight:'auto',backgroundColor:'white'}}>
                    <h1 style={{float:'left', fontSize:'24px', marginLeft:'3%', marginTop:'3%'}}>Frequently Asked Questions(FAQS)</h1>
                    <h1 style={{float:'right', marginRight:'3%', marginTop:'3%'}} onClick={()=> setIsModal(false)}><Clear style={{fontSize:'32px'}} /></h1>
                    <Accordion defaultActiveKey="0">
                        {faqs.map((data)=>(

                            <Accordion.Item eventKey={data.id}>
                                <Accordion.Header>{data.question}</Accordion.Header>
                                <Accordion.Body>
                                    {data.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    

                </div>: null}
            </div>

            

            <div>
                <h3 style={{ marginBottom: '20px', marginLeft: '5%' }}>Suggestion</h3>
            </div>

            <div>

            </div>
            <form onSubmit={onSubmitTask}>
                <textarea style={{height:'300px', width:'90%',marginLeft:'5%',marginRight:'5%'}} id="description" placeholder="Input Your Feedback" name="description" value={description} onChange={ (e) => setDescription(e.target.value) }></textarea><br></br><br></br>
                <button style={{ width:'90%',padding:'2%',margin:'5%', backgroundColor:'green', color:'white', border:'white', borderRadius: '99px'}}>Send Feedback</button>
            </form>
            <Outlet />
        </div>
    )
}

export default MembershipPrivileges