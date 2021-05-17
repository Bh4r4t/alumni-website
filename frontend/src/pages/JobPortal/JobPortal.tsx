import { Layout, Row, Col, Divider } from 'antd';
import { Card, Avatar } from 'antd';
import './JobPortal.css';
import { Input, Select, Button } from 'antd';
import { useState, useEffect } from 'react';
import { getJob } from '../../services/api/job';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Option } = Select;


export default function JobPortal() {
    const global_state = useSelector((state: any) => state.authReducer.user);


    const [job, setjobs] = useState<any>([]);
    useEffect(() => {
        getJob(global_state.token).then((res) => {
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
                                style={{ width: 200, margin: '0' }}
                            />
                            <Input
                                size="large"
                                style={{ width: 200, margin: '0 8px' }}
                                placeholder="Location"
                            >
                              
                            </Input>
                            

                            <Input
                                size="large"
                                style={{ width: 200, margin: '0 8px' }}
                                placeholder="Company"
                            >
                                
                            </Input>

                            <Button style={{ width: 200, margin: '0px 5px', backgroundColor: "green", color: "white", fontSize: "2vh", fontWeight: 500 }} size="large">
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
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="full-type">{job[0]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[0]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[0]?.job_location}</h2>
                                </Col>
                            </Row>
                          

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="full-type">{job[1]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_2.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[1]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[1]?.job_location}</h2>
                                </Col>
                            </Row>
                            

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="part-type">{job[2]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_3.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[2]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[2]?.job_location}</h2>
                                </Col>
                            </Row>
                            

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="part-type">{job[3]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[3]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[3]?.job_location}</h2>
                                </Col>
                            </Row>
                           

                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginLeft: 50, marginRight: 50, marginTop: 20, marginBottom: 20 }} gutter={20}>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="intern-type">{job[4]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_5.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[4]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[4]?.job_location}</h2>
                                </Col>
                            </Row>
                            

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="full-type">{job[5]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_7.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[5]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[5]?.job_location}</h2>
                                </Col>
                            </Row>
                           

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="part-type">{job[6]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_7.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[6]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[6]?.job_location}</h2>
                                </Col>
                            </Row>
                           

                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <Card style={{ width: "1000" }}>
                            <Col xs={15} style={{ color: "green" }}>
                                <span className="intern-type">{job[7]?.job_type}</span>
                            </Col>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <Avatar src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_8.png" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 20 }} >
                                    <h1>{job[7]?.title}</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col style={{ marginTop: 0 }} >
                                    <h2 style={{ fontWeight: 200 }}>{job[7]?.job_location}</h2>
                                </Col>
                            </Row>
                          

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Divider orientation="center">

                        <Button style={{ width: 250, margin: '0px 5px', backgroundColor: "green", color: "white", fontSize: "2vh", fontWeight: 600, height: 50 }} size="large" href="/all_jobs">
                            BROWSE  ALL  JOBS</Button>


                    </Divider>
                </Row>

            </Content>
        </Layout >

    )
}



/*import {
	Layout,
	Row,
	Col,
	Divider,
	Input,
	Select,
	Button,
	Card,
	Avatar,
} from 'antd';
import './JobPortal.css';
import { useState, useEffect } from 'react';
import { getJob } from '../../services/api/job';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Option } = Select;

export default function JobPortal() {
	const [job, setJobs] = useState<any>(null);
	const user = useSelector((state: any) => state.authReducer.user);
	useEffect(() => {
		getJob(user.token)
			.then((res: any) => {
				if (res?.data?.error) {
					throw new Error(res.data.message);
				} else {
					setJobs(res.data.jobs);
				}
			})
			.catch((err: any) => console.log(err.message));
		// dummy jobs
		let jobs = [];
		for (let i = 0; i < 20; i++) {
			jobs.push(JobCard());
		}
		//
		setJobs(jobs);
	}, []);

	// const jobCards = () => {
	// 	if (job) {
	// 		const cards = [];
	// 		let idx = 0;
	// 		while (idx < job.length) {
	// 			if (idx % 3 === 0) {
	// 				<Row
	// 					style={{ marginLeft: 50, marginRight: 50 }}
	// 					gutter={20}
	// 				>
	// 					{while (idx < job.length) {

	// 					}}
	// 				</Row>;
	// 			}
	// 		}
	// 	} else {
	// 		<p>Sorry No new jobs available</p>;
	// 	}
	// };

	return (
		<Layout>
			<Content>
				<Row
					style={{
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						backgroundImage:
							'url("http://utouchdesign.com/themes/envato/escort/assets/img/slider_bg.jpg")',
						opacity: 1.3,
						height: '55em',
					}}
				>
					<Col
						// xs={12}
						style={{
							marginTop: 200,
							marginLeft: 50,
							height: '15vh',
						}}
					>
						<div className="job-statement">
							Search Between More<br></br> Than{' '}
							<span className="number-jobs">100</span> Open Jobs.
						</div>
					</Col>
					<Col xs={24} style={{ marginTop: 80, paddingLeft: 50 }}>
						<div className="job-search-keyword">
							Trending Job Keywords:{' '}
							<span className="keyword-jobs">Web developer</span>{' '}
							<span className="keyword-jobs">Web designer</span>{' '}
							<span className="keyword-jobs">IOS Developer</span>{' '}
							<span className="keyword-jobs">
								Android Developer
							</span>{' '}
						</div>
					</Col>
					<Col style={{ marginLeft: 50, marginBottom: 200 }}>
						<span>
							<Input
								type="text"
								placeholder="Search Keywords"
								style={{ width: 200, margin: '0' }}
							/>
							<Select
								size="large"
								style={{ width: 200, margin: '0 8px' }}
								placeholder="Location"
							>
								<Option value="Delhi">Delhi</Option>
								<Option value="Mumbai">Mumbai</Option>
							</Select>
							<Select
								size="large"
								style={{ width: 200, margin: '0' }}
								placeholder="Category"
							>
								<Option value="WebDev">Web Developer</Option>
								<Option value="AppDev">App Developer</Option>
							</Select>

							<Select
								size="large"
								style={{ width: 200, margin: '0 8px' }}
								placeholder="Company"
							>
								<Option value="Amazon">Amazon</Option>
								<Option value="Flipkart">Flipkart</Option>
							</Select>

							<Button
								style={{
									width: 200,
									margin: '0px 5px',
									backgroundColor: 'green',
									color: 'white',
									fontSize: '2vh',
									fontWeight: 500,
								}}
								size="large"
							>
								SEARCH
							</Button>
						</span>
					</Col>
				</Row>
				<Row>
					<Divider type="horizontal" orientation="center">
						<span
							style={{
								fontWeight: 800,
								fontSize: 35,
								color: '#334e6f',
							}}
						>
							Latest Jobs
						</span>
					</Divider>
				</Row>
				
				<Row>
					<Divider orientation="center">
						<Button
							style={{
								width: 250,
								margin: '0px 5px',
								backgroundColor: 'green',
								color: 'white',
								fontSize: '2vh',
								fontWeight: 600,
								height: 50,
							}}
							size="large"
						>
							BROWSE ALL JOBS
						</Button>
					</Divider>
				</Row>
			</Content>
		</Layout>
	);
}
/
function JobCard() {
	return (
		<Col span={24}>
			<Card style={{ width: '1000' }}>
				<Col xs={15} style={{ color: 'green' }}>
					<span className="intern-type">INTERNSHIP</span>
				</Col>
				<Row justify="center">
					<Col style={{ marginTop: 20 }}>
						<Avatar
							src="http://utouchdesign.com/themes/envato/escort/assets/img/company_logo_8.png"
							size={{
								xs: 24,
								sm: 32,
								md: 40,
								lg: 64,
								xl: 80,
								xxl: 100,
							}}
						/>
					</Col>
				</Row>
				<Row justify="center">
					<Col style={{ marginTop: 20 }}>
						<h1>MEAN Developer</h1>
					</Col>
				</Row>
				<Row justify="center">
					<Col style={{ marginTop: 0 }}>
						<h2 style={{ fontWeight: 200 }}>Indore</h2>
					</Col>
				</Row>
				<Row justify="center">
					<Button
						style={{
							width: 200,
							margin: '8px 8px',
							backgroundColor: 'white',
							color: 'green',
							fontSize: '2vh',
							fontWeight: 500,
							borderColor: 'green',
						}}
						size="large"
					>
						APPLY NOW
					</Button>
				</Row>
			</Card>
		</Col>
	);
}*/
