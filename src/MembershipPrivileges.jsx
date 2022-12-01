import { margin } from '@mui/system';
import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Accordion from 'react-bootstrap/Accordion';
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
        const getMember = async () => {
            const req = await axios.get('https://dev-z1m.z1platform.com/api/contact/by/user',
                { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijg0MjcwM2EyZjUyMTJjODI4MTE4N2VlZTM3NjQ4ODA1Njk1ZTg0NmIyNGU0MWRjNjI1NTdiOGRkZDIyMWM4NTBmYjdiZWJmYTU0ZGU2NzMyIiwiaWF0IjoxNjY5MzYwNzE4Ljc4NjUxMywibmJmIjoxNjY5MzYwNzE4Ljc4NjUxNiwiZXhwIjoxNzI5MzYwNzE4Ljc4MTAyOCwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.Snv62PHgmV0LfwhUHpU3ZFJRzMzwMKXHN7PxHyBbLDJaCsuQNzcyvUUNFlDn8W-j9Xt7jvWq5m_91uNUeB4dZi9w3wQerybv7p8JUIiYMzCY-3oCbuFD6k5QoRzL0Kf5czKzrx2VQK47b1ixMwizuKGoGHvsFI33WCqz05gGa7_udgBViQrq5EfGn2SolCd0wa1VlGfK2TwCYNnxydkZ6fAo0fMDkp_tOGCtCgN2YOc67mLBdWFrNYNBgySwcDL1_kpbd6wwPiD5xVUVxDYFS0YamAOGF60waJ-H2fo1OWpCqMU04u3-r8-18yCEiH_rYh4DopRjs9HBO7cg7cWn8NyzGjDxjkzV6QQa_m5aRPf0LUsE1AnoCl51Y2xMWvr3Mf_wmwF8fr9p4hY48As-u30PeD8_zr3lisAHmnesvi3UBCjrb_EKEnmIz5ir7vslWCDMi4HmWH_wxCcPSmVL9D1DCUr0Z3zF-IlW0QJ5eMxXUMO1vHslc_FKzgS8KA3K5XPShBe6uyniDPrNwAYpeAKBUXc9Zphmbl9AnYCOwUZ-XyPB1POyWX-pcJb0eeRoGyZz7HGMHS2AyBdUj0KUZSMns141HoxiV5gZITKKOiMUurqRYYQU2cxwMQNBw_soYqm1sB9Wgromt1WVFnSiIxfwZ1d2WQhoO3_0AFNZ4yU' } })
            setMember(req.data.data)
        }
        getMember()

        const getFAQS = async () => {
            const req = await axios.get('https://dev-z1m.z1platform.com/api/user/get/faqs',
                { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3MSIsImp0aSI6Ijg0MjcwM2EyZjUyMTJjODI4MTE4N2VlZTM3NjQ4ODA1Njk1ZTg0NmIyNGU0MWRjNjI1NTdiOGRkZDIyMWM4NTBmYjdiZWJmYTU0ZGU2NzMyIiwiaWF0IjoxNjY5MzYwNzE4Ljc4NjUxMywibmJmIjoxNjY5MzYwNzE4Ljc4NjUxNiwiZXhwIjoxNzI5MzYwNzE4Ljc4MTAyOCwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.Snv62PHgmV0LfwhUHpU3ZFJRzMzwMKXHN7PxHyBbLDJaCsuQNzcyvUUNFlDn8W-j9Xt7jvWq5m_91uNUeB4dZi9w3wQerybv7p8JUIiYMzCY-3oCbuFD6k5QoRzL0Kf5czKzrx2VQK47b1ixMwizuKGoGHvsFI33WCqz05gGa7_udgBViQrq5EfGn2SolCd0wa1VlGfK2TwCYNnxydkZ6fAo0fMDkp_tOGCtCgN2YOc67mLBdWFrNYNBgySwcDL1_kpbd6wwPiD5xVUVxDYFS0YamAOGF60waJ-H2fo1OWpCqMU04u3-r8-18yCEiH_rYh4DopRjs9HBO7cg7cWn8NyzGjDxjkzV6QQa_m5aRPf0LUsE1AnoCl51Y2xMWvr3Mf_wmwF8fr9p4hY48As-u30PeD8_zr3lisAHmnesvi3UBCjrb_EKEnmIz5ir7vslWCDMi4HmWH_wxCcPSmVL9D1DCUr0Z3zF-IlW0QJ5eMxXUMO1vHslc_FKzgS8KA3K5XPShBe6uyniDPrNwAYpeAKBUXc9Zphmbl9AnYCOwUZ-XyPB1POyWX-pcJb0eeRoGyZz7HGMHS2AyBdUj0KUZSMns141HoxiV5gZITKKOiMUurqRYYQU2cxwMQNBw_soYqm1sB9Wgromt1WVFnSiIxfwZ1d2WQhoO3_0AFNZ4yU' } })
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
            const res = await axios.post('https://dev-z1m.z1platform.com/api/user/feedback/create', 
                {
                    category: "Natural Park",
                    description: result
                },
                {headers: {
                    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NyIsImp0aSI6ImNlYmExNWNhNzEwYTk0N2FmM2NkMDVhMTU3NzQ1ZGU4NDg3NjJhMzcwZTY5OTFjZmIwZDcyMDNkMjlkODFiMTUyMjk5OWY1NDkwY2VhZjhlIiwiaWF0IjoxNjY5MjU4NzE3Ljc0MzI0NiwibmJmIjoxNjY5MjU4NzE3Ljc0MzI1MSwiZXhwIjoxNzI5MjU4NzE3LjcyNjI0Niwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.R-mLFXhuY8tqfgHVKyFNwdZW8MsgPpcvnrmJt40uVfmxXsZHyQ-aq2wbYmHAuFpTliSl1ghuvih2rzBFvVIU7dOO_2TIJb5lXVJ1k8xnRS-r9TxYF0BSEhsd6ONYlMPSJDYDLltYxpI5QmIpm1C8lw4QPMZU05IXkOGo7hmqwP78JaVKIF6YkMYltU-mMABG5b-86r2aDYATXjSSVDElTcEBZwVHl8f3jsck6N3mSkteNQunF-GSWrVimPYvpZtiJlgkr90DdBS6ULli4avdNCtGsJInWot_J2_7-L9Yhcu0nAwuq1DnFhr11hX8647Iv20zaMLPHw7LogbCRUEvlg04JIpL5WUsjWDG11NBcdKPPN-nNNbH3zpm2UmMSQsGCEg4mwbFPA3-LgE-jtTUiczF9rQhw4wHMn4vkvgaJG3w18zJKe8PeVUBNd3p5qL5AGAVDSPe6Y1ajdi5SR4D2X5e_F8qVFC1TKwUi-3YopWYkJj2fouJhBYWM46t9PoD1dPcmu-w4oPIY3Yv5SYCRytJmzE5oAfJbmOOE8lAD5ovgoJsMEFHB9WLaDZrayMLJK0cgn27ypgxVHaG__Vgj6o-vJ4aIRlCi4MKC33GDtMiElz804tWKUulo1rNOqguG52AEhwE_q_u-I5gQhtBDyk4rUMZUACNiutWkqzghmg',
                }})
            .then( ( {data} ) =>  {
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
                <Link to='/homepage'>
                    <h1 style={{ marginBottom: '20px', paddingTop: '20px' }}><KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />Home Pages</h1>
                </Link>
            </div>
            <div style={{ marginLeft: '5%', marginRight: '5%', textAlign: 'center', background:'#287F30', padding:'50px', backgroundSize: '100%',backgroundImage:'url(./BackgroundProfile.png)' }}>
                <img src={member.avatar} height='300px' width='300px' style={{ borderRadius: '50%', textAlign:'center', marginBottom:'10px' }}></img>
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
                    <span style={{ marginBottom: '20px', padding: '10px', marginLeft: '5%',marginRight:'3%', background:'#287F30' ,color:'white' ,border:'white',borderRadius: '99px'}}>
                        {member.membership_name}
                    </span>
                </h3>
            </div>
            }
            {member.benefits && 
            <h3 style={{ marginBottom: '20px', paddingTop: '20px', marginLeft: '5%' }}>Benefit, we offred</h3>
            }

           <div className='row' style={{ margin: '15px', background: 'white' }}>
                <Accordion defaultActiveKey="0">
                {member.benefits?.map((data)=>(
                    <Accordion.Item eventKey={data.id} key={data.id}>
                        <Accordion.Header><img src={data.icon} style={{height: '35px', paddingRight:'5px'}}></img> {data?.name}</Accordion.Header>
                        <Accordion.Body dangerouslySetInnerHTML={ {__html:data?.description}}>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
            </div>

            <div className='d-flex justify-content-between' style={{ marginBottom: '20px', paddingTop: '20px', margin: '20px' }}>
                <h3 style={{padding: '10px'}}>FAQs</h3>
                <Link to={'/faqs'}>
                    {/* <button style={{ marginBottom: '20px', padding: '10px', marginLeft: '5%',marginRight:'3%', float:'right', background:'green' ,color:'white' ,border:'white',borderRadius: '99px'}} onClick={()=> setIsModal(!isModal)}>See All FAQS</button> */}
                    <button style={{padding: '10px',background:'#287F30' ,color:'white' ,border:'white',borderRadius: '99px'}}>See All FAQS</button>
                </Link>
            </div>

            
            <div style={{margin:'5%'}}>
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
                <Link to={'/faqs'}type="button" >
                    <p>See All FAQS</p>
                </Link>
                </div>

                {/* {isModal ? <div style={{position:'absolute' , top:'0px' , left:'0', right:'0', marginLeft:'auto', marginRight:'auto',backgroundColor:'white'}}>
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
                     */}

        
            </div>

            

            <div>
                <h3 style={{ marginBottom: '20px', marginLeft: '5%' }}>Suggestion</h3>
            </div>

            <div>

            </div>
            <form onSubmit={onSubmitTask}>
                <textarea style={{height:'300px', width:'90%',marginLeft:'5%',marginRight:'5%'}} id="description" placeholder="Input Your Feedback" name="description" value={description} onChange={ (e) => setDescription(e.target.value) }></textarea><br></br><br></br>
                <button style={{ width:'90%',padding:'2%',margin:'5%', backgroundColor:'#287F30', color:'white', border:'white', borderRadius: '99px'}}>Send Feedback</button>
            </form>
            <Outlet />
        </div>
    )
}

export default MembershipPrivileges