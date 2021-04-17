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
	const user_name =
		username.length > 8 ? username.slice(0, 8) + '...' : username;
	const { md } = useBreakpoint();

	const home = (
		<a href="/">
			<HomeTwoToneIcon
				style={{
					fontSize: 30,
					marginBottom: '5px',
				}}
			/>
			{md ? <span>Home</span> : null}
		</a>
	);

	const dashboard = (
		<a href="/dashboard">
			<DashboardTwoToneIcon
				style={{
					fontSize: 30,
					marginBottom: '5px',
				}}
			/>
			{md ? <span>Dashboard</span> : null}
		</a>
	);

	const job_board = (
		<a href="/job_portal">
			<WorkTwoToneIcon
				style={{
					fontSize: 30,
					marginBottom: '5px',
				}}
			/>
			{md ? <span>Job Board</span> : null}
		</a>
	);

	const members = (
		<a>
			<GroupTwoToneIcon
				style={{
					fontSize: 30,
					marginBottom: '5px',
				}}
			/>
			{md ? <span>Members</span> : null}
		</a>
	);

	const events = (
		<a>
			<EventTwoToneIcon
				style={{
					fontSize: 30,
					marginBottom: '5px',
				}}
			/>
			{md ? <span>Events</span> : null}
		</a>
	);

	const newsroom = (
		<a>
			<AnnouncementTwoToneIcon
				style={{
					fontSize: 30,
					marginBottom: '5px',
				}}
			/>
			{md ? <span>Newsroom</span> : null}
		</a>
	);

	const profile = (
		<a href="/profile">
			<AccountBoxTwoToneIcon
				style={{
					fontSize: 35,
					marginRight: '5px',
				}}
			/>
			{user_name}
		</a>
	);
	return !md ? (
		// <Affix offsetTop={0} className="privatenav-block-affix">
		<nav className="privatenav">
			<Row className="privatenav-wrapper-row">
				<Col span={24} className="privatenav-wrapper-col">
					<Col span={24} className="privatenav-block">
						<Col span={4} className="privatenav-block-item">
							{home}
						</Col>
						<Col span={4} className="privatenav-block-item">
							{dashboard}
						</Col>
						<Col span={4} className="privatenav-block-item">
							{job_board}
						</Col>
						<Col span={4} className="privatenav-block-item">
							{members}
						</Col>
						<Col span={4} className="privatenav-block-item">
							{events}
						</Col>
						<Col span={4} className="privatenav-block-item">
							{newsroom}
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
							{profile}
						</Col>
					</Col>
				</Col>
			</Row>
		</nav>
	) : (
		// </Affix>
		<Affix offsetTop={0} className="privatenav-block-affix">
			<nav className="privatenav">
				<Row className="privatenav-wrapper-row">
					<Col span={24} className="privatenav-wrapper-col">
						<Col span={2} className="privatenav-block-item">
							{home}
						</Col>
						<Col span={2} className="privatenav-block-item">
							{dashboard}
						</Col>
						<Col span={2} className="privatenav-block-item">
							{job_board}
						</Col>
						<Col span={2} className="privatenav-block-item">
							{members}
						</Col>
						<Col span={2} className="privatenav-block-item">
							{events}
						</Col>
						<Col span={2} className="privatenav-block-item">
							{newsroom}
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
							<Col span={12} className="profile">
								{profile}
							</Col>
						</Col>
					</Col>
				</Row>
			</nav>
		</Affix>
	);
};

export default PrivateNav;
