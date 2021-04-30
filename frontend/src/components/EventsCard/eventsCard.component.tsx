import { Row, Col, Card } from 'antd';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import './eventsCard.component.css';

function EventsCard(props:any) {
	return (
		<Card className="events-items-card" hoverable>
			<Row className="events-items-card-row">
				<Col span={8}>
					<div className="events-date">
						<span className="month">APR</span>
						<span className="date">15</span>
					</div>
				</Col>
				<Col span={16}>
					<div className="event-status">
						<span
							style={{
								color: 'grey',
								fontWeight: 500,
								fontSize:'1.25em'
							}}
						>
							PAST
						</span>
					</div>
					<div className="event-title">
						<span> Alumni Meet and interaction with director </span>
					</div>
					<div
						className="event-location"
						style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}
					>
						<LocationOnOutlinedIcon style={{ fontSize: 18 }} />
						<span
							style={{
								color: 'grey',
								fontSize: '1.3em',
								fontWeight: 400,
								marginLeft: '5px',
							}}
						>
							IIT Ropar
						</span>
					</div>
				</Col>
			</Row>
		</Card>
	);
}

export default EventsCard;
