import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, Card, Row, Col, Image } from 'antd';
import { useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './execTeam.css';
import profile_img from '../../../assets/profile.png';

function ExecTeam() {
	const [currView, setCurrView] = useState('All');

	const handleMenuClick = () => {};

	const filterMenu = (
		<Menu className="execteam-dropdown-filter-menu">
			<Menu.Item
				key="1"
				className="execteam-dropdown-filter-menu"
				onClick={() => setCurrView('All')}
			>
				All
			</Menu.Item>
			<Menu.Item
				key="2"
				className="execteam-dropdown-filter-menu"
				onClick={() => setCurrView('Leadership')}
			>
				Leadership
			</Menu.Item>
			<Menu.Item
				key="3"
				className="execteam-dropdown-filter-menu"
				onClick={() => setCurrView('Ex-Officio')}
			>
				Ex-Officio
			</Menu.Item>
			<Menu.Item
				key="4"
				className="execteam-dropdown-filter-menu"
				onClick={() => setCurrView('Council Members')}
			>
				Council Members
			</Menu.Item>
			<Menu.Item
				key="5"
				className="execteam-dropdown-filter-menu"
				onClick={() => setCurrView('Batch Evangelist')}
			>
				Batch Evangelist
			</Menu.Item>
			<Menu.Item
				key="6"
				className="execteam-dropdown-filter-menu"
				onClick={() => setCurrView('Ex-Council Members')}
			>
				Ex-Council Members
			</Menu.Item>
		</Menu>
	);
	return (
		<div className="execteam-container">
			<div className="execteam-body">
				<div className="execteam-head">
					<h1>Meet the Executive Committee</h1>
					<hr />
				</div>
				<div className="execTeam-filter">
					<Dropdown
						overlay={filterMenu}
						trigger={['click']}
						className="execteam-dropdown"
					>
						<Button className="execteam-dropdown-buttom">
							{currView} <DownOutlined />
						</Button>
					</Dropdown>
				</div>
				<div className="execteam-description">
					<h1>Leadership</h1>
					<hr />
				</div>
				<ExecTeamProfileCard
					img={profile_img}
					name="Bharat Ladrecha"
					designation="member"
					profile="Student"
				/>
				<ExecTeamProfileCard
					img={profile_img}
					name="Someones"
					designation="member"
					profile="Student"
				/>
			</div>
		</div>
	);
}

function ExecTeamProfileCard(props: any) {
	return (
		<div className="execteam-profilecard-container">
			<Card className="execteam-profilecard">
				<Row className="execteam-profilecard-row">
					<Col span={1} />
					<Col span={6} className="execteam-profilecard-row-imgcol">
						<Image
							className="execteam-profilecard-row-img"
							width={'11vw'}
							src={props.img}
							alt="Display picture"
							preview={false}
						/>
					</Col>
					<Col span={2} />
					<Col span={14} className="execteam-profilecard-row-details">
						<div className="execteam-profilecard-row-details-div">
							<Row className="person-info">
								<div className="person-info">
									<h2>{props.designation}</h2>
									<h1>{props.name}</h1>
									<hr />
									<span>{props.profile}</span>
								</div>
							</Row>
							<div className="person-social">
								<a href="mailto:" target="_blank">
									<EmailIcon
										style={{ fontSize: 25 }}
										className="execteam-social-icon"
									/>
								</a>
								<a
									href="https://www.linkedin.com/person"
									target="_blank"
								>
									<LinkedInIcon
										style={{ fontSize: 25 }}
										className="execteam-social-icon"
									/>
								</a>
								<a
									href="https://www.facebook.com/groups/iitrpraa/"
									target="_blank"
								>
									<FacebookIcon
										style={{ fontSize: 25 }}
										className="execteam-social-icon"
									/>
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Card>
			<hr />
		</div>
	);
}

export default ExecTeam;
