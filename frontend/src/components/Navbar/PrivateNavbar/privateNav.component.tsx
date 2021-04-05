import { Badge, Row, Col, Grid, Affix } from 'antd';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
import AnnouncementTwoToneIcon from '@material-ui/icons/AnnouncementTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import './privateNav.component.css';

const { useBreakpoint } = Grid;

const PrivateNav: React.FC<{ username: string }> = ({ username }) => {
	const user_name = username.length > 8 ? username.slice(0, 8)+'...' : username;
	const { md } = useBreakpoint();
	return !md ? (
		// <Affix offsetTop={0} className="privatenav-block-affix">
		<nav className="privatenav">
			<Row className="privatenav-wrapper-row">
				<Col span={24} className="privatenav-wrapper-col">
					<Col span={24} className="privatenav-block">
						<Col span={4} className="privatenav-block-item">
							<HomeTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
						</Col>
						<Col span={4} className="privatenav-block-item">
							<DashboardTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
						</Col>
						<Col span={4} className="privatenav-block-item">
							<WorkTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
						</Col>
						<Col span={4} className="privatenav-block-item">
							<GroupTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
						</Col>
						<Col span={4} className="privatenav-block-item">
							<EventTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
						</Col>
						<Col span={4} className="privatenav-block-item">
							<AnnouncementTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
						</Col>
					</Col>
					<Col span={24} className="privatenav-block1">
						<Col span={12} className="private-block1-item">
							<Badge count={5}>
								<a href="" style={{ color: 'black' }}>
									<NotificationsNoneRoundedIcon />
								</a>
							</Badge>
							<Badge count={5}>
								<a href="" style={{ color: 'black' }}>
									<MailOutlineRoundedIcon />
								</a>
							</Badge>
						</Col>
						<Col span={12} className="private-block1-item">
							<div>
								<AccountBoxTwoToneIcon
									style={{
										fontSize: 30,
										marginRight: '5px',
									}}
								/>
								<span>{user_name}</span>
							</div>
						</Col>
					</Col>
				</Col>
			</Row>
		</nav>
		// </Affix>
	) : (
		<Affix offsetTop={0} className="privatenav-block-affix">
			<nav className="privatenav">
				<Row className="privatenav-wrapper-row">
					<Col span={24} className="privatenav-wrapper-col">
						<Col span={2} className="privatenav-block-item">
							<HomeTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
							Home
						</Col>
						<Col span={2} className="privatenav-block-item">
							<DashboardTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
							Dashboard
						</Col>
						<Col span={2} className="privatenav-block-item">
							<WorkTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
							Job Board
						</Col>
						<Col span={2} className="privatenav-block-item">
							<GroupTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
							Members
						</Col>
						<Col span={2} className="privatenav-block-item">
							<EventTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
							Events
						</Col>
						<Col span={2} className="privatenav-block-item">
							<AnnouncementTwoToneIcon
								style={{
									fontSize: 30,
									marginBottom: '5px',
								}}
							/>
							Newsroom
						</Col>
						<Col span={6} className="privatenav-block-item">
							<Col span={12}>
								<Badge count={5}>
									<a href="" style={{ color: 'black' }}>
										<NotificationsNoneRoundedIcon />
									</a>
								</Badge>
								<Badge count={5}>
									<a href="" style={{ color: 'black' }}>
										<MailOutlineRoundedIcon />
									</a>
								</Badge>
							</Col>
							<Col span={12}>
								<AccountBoxTwoToneIcon
									style={{
										fontSize: 35,
										marginRight: '5px',
									}}
								/>
								{user_name}
							</Col>
						</Col>
					</Col>
				</Row>
			</nav>
		</Affix>
	);
};

export default PrivateNav;
