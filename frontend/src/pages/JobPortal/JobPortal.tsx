import { Layout, Row, Col, Divider } from 'antd';
import { Card, Avatar } from 'antd';
import './JobPortal.css';
import { Input, Select, Button } from 'antd';
import { useState, useEffect } from 'react';
import { getJob, getRecJob } from '../../services/api/job';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const { Content } = Layout;
const { Option } = Select;


export default function JobPortal() {
    const global_state = useSelector((state: any) => state.authReducer.user);
    const history = useHistory()
    const [jobsearch,setjobsearch]=useState({keywords:"",job_location:"",company:""})

    const [job, setjobs] = useState<any>([]);
    useEffect(() => {
        getRecJob(global_state.token).then((res) => {
            if (res?.data?.error) {
                throw new Error(res.data.message);
            }

            else {
                console.log(res.data);

                setjobs(res.data.jobs);

                console.log(job);
            }
        })
            .catch((err) => {
            });
    }, []);

    const handleInputChange = (e: any) => {
        setjobsearch({ ...jobsearch, [e.target.id]: e.target.value })
    }


    return (
        <Layout>
            <Content>

                <Row style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: 'url("http://utouchdesign.com/themes/envato/escort/assets/img/slider_bg.jpg")', opacity: 1.3, height: "55em" }}>
                    <Col xs={12} style={{ marginTop: 200, marginLeft: 50, height: "15vh" }}>
                        <div className="job-statement">Search Between More<br></br> Than <span className="number-jobs">100</span> Open Jobs.</div>

                    </Col>
                    <Col xs={24} style={{ marginTop: 80, marginLeft: 50 }}>
                        <div className="job-search-keyword">Trending Job Keywords: <span className="keyword-jobs">Web developer</span> <span className="keyword-jobs">Web designer</span> <span className="keyword-jobs">IOS Developer</span> <span className="keyword-jobs">Android Developer</span> </div>

                    </Col>
                    <Col xs={18} style={{ marginLeft: 50, marginBottom: 200 }}>
                        <span>
                            <Input
                                type="text"
                                placeholder="Search Keywords"
                                onChange={handleInputChange}
                                id="keywords"
                                style={{ width: 200, margin: '0' }}
                            />
                            <Input
                                size="large"
                                style={{ width: 200, margin: '0 8px' }}
                                id="job_location"
                                onChange={handleInputChange}
                                placeholder="Location"
                            >
                              
                            </Input>
                            

                            <Input
                                size="large"
                                style={{ width: 200, margin: '0 8px' }}
                                id="company"
                                onChange={handleInputChange}

                                placeholder="Company"
                            >
                                
                            </Input>

                            <Button style={{ width: 200, margin: '0px 5px', backgroundColor: "green", color: "white", fontSize: "2vh", fontWeight: 500 }} size="large" onClick={() => (history.push('/all_jobs',jobsearch))}>
                                SEARCH</Button>

                        </span>

                    </Col>

                </Row>
                <Row>
                    <Divider orientation="center">


                        <h1 style={{ fontWeight: 800, fontSize: 35, color: "#334e6f" }}>Latest Jobs</h1>

                    </Divider>
                </Row>
                <Row style={{ marginLeft: 50, marginRight: 50 }} gutter={20}>
                    {job &&
                        job.map((job_element: any) => (
                            <Col xs={24} md={12} lg={6}>
                                <Card style={{ width: "1000" }}>
                                    <Col xs={15} style={{ color: "green" }}>
                                        <span className="full-type">{job_element?.job_type}</span>
                                    </Col>
                                    <Row justify="center">
                                        <Col style={{ marginTop: 20 }} >
                                            <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                        </Col>
                                    </Row>
                                    <Row justify="center">
                                        <Col style={{ marginTop: 20 }} >
                                            <h1>{job_element?.title}</h1>
                                        </Col>
                                    </Row>
                                    <Row justify="center">
                                        <Col style={{ marginTop: 0 }} >
                                            <h2 style={{ fontWeight: 200 }}>{job_element?.job_location}</h2>
                                        </Col>
                                    </Row>
                          

                                </Card>
                            </Col>))}
                </Row>
                <Row style={{marginTop:"1vh"}}>
                    <Divider orientation="center">

                        <Button style={{ width: 250, margin: '0px 5px', backgroundColor: "green", color: "white", fontSize: "2vh", fontWeight: 600, height: 50 }} size="large" onClick={()=>history.push('/all_jobs',jobsearch)}>
                            BROWSE  ALL  JOBS</Button>


                    </Divider>
                </Row>

            </Content>
        </Layout >

    )
}