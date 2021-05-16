import { Row, Col, Grid, Button, Card } from 'antd';

import JobCard from '../../../components/JobCard/jobCard.component';
import { Input, Select, } from 'antd';
import { useState, useEffect } from 'react';
import './jobs.css';
import { useSelector } from 'react-redux';
import { getJob } from '../../../services/api/job';

const { Option } = Select;

const { useBreakpoint } = Grid;


function JobSection() {
	const global_state = useSelector((state: any) => state.authReducer.user);
	const [jobs, setjobs] = useState([]);
	useEffect(() => {
		getJob(global_state.token)
			.then(response => {
				console.log(response.data)
				setjobs(response.data.jobs)
			})
	}, [])
	const { md } = useBreakpoint();
	return (
		<section className="events-section">
			<div className="events-section-container">
				<Row className="events-section-head-row">
					<div className="events-section-head">
						<h1>Job Board</h1>
						<hr />
					</div>

				</Row>

				<Row justify="end" style={{marginBottom:20}}>
					<Button type="primary" htmlType="submit" href="/postjob">
						+ Post Job/Internship
                </Button>

				</Row>
				<Row>
					<Col xs={24} style={{ marginLeft: 10, marginBottom: 50 }}>
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
				<Row className="events-section-items-row">
					{jobs?.map((job_element) => (
						<Col
							span={md ? 8 : 24}
							className="events-section-items-col"
						>
							<JobCard job={job_element} />
						</Col>
					))}

				</Row>


			</div>
		</section>
	);
}


export default JobSection;
