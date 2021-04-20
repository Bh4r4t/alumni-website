import { Card, Image, Grid, Tag, Col, Row, Button } from 'antd';
import ProfileInfo from '../../components/ProfileInfo/profileInfo.component';
import profileImg from '../../assets/profile.png';
import './profilePage.css';
import {
	CheckCircleOutlined,
	FacebookFilled,
	LinkedinFilled,
	GlobalOutlined,
	MailOutlined,
	EditOutlined,
} from '@ant-design/icons';

const { useBreakpoint } = Grid;

function ProfilePage() {
	const { xl, md } = useBreakpoint();
	return (
		<div className="profilepage">
			<div className="profilepage-container">
				<Card className="profilepage-introsection-container">
					<div className="profilepage-profile-introsection">
						<Image
							className="profilepage-profile-pic"
							src={profileImg}
							width={xl ? 250 : md ? 200 : 130}
						/>
					</div>
					<Row className="profilepage-profile-introdetails-container">
						<Col span={md ? 18 : 24}>
							<Row className="profilepage-profile-introdetails">
								<div>
									<h1>
										Bharat Ladrecha{' '}
										<CheckCircleOutlined
											style={{
												marginLeft: '10px',
												marginBottom: '20px',
												fontSize: '0.9em',
												color: 'green',
											}}
										/>
									</h1>

									<span>
										B.Tech. - Computer Science and
										Engineering - 2022
										{/* stream + ' - ' + course + ' - ' + batch */}
									</span>
								</div>
							</Row>
							<Row className="profilepage-profile-sociallinks">
								<SocialLink />
							</Row>
							{/* <Button>
								{' '}
								<EditOutlined />
								Edit{' '}
							</Button> */}
						</Col>
						<Col className="tag" span={md ? 6 : 24}>
							<Tag color="#0cb800" style={{ fontSize: '1.2em' }}>
								Student
							</Tag>
						</Col>
					</Row>
				</Card>
				<ProfileInfo />
			</div>
		</div>
	);
}

function SocialLink(props: any) {
	return (
		<>
			<a href={'mailto:' + props.facebook} target="_blank">
				<MailOutlined style={{ fontSize: 25 }} />
			</a>
			<a href={props.facebook} target="_blank">
				<FacebookFilled style={{ fontSize: 25 }} />
			</a>
			<a href={props.linkedIn} target="_blank">
				<LinkedinFilled style={{ fontSize: 25 }} />
			</a>
			<a href={props.website} target="_blank">
				<GlobalOutlined style={{ fontSize: 25 }} />
			</a>
		</>
	);
}

export default ProfilePage;
