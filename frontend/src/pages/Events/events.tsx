import { Row, Col, Grid, Button, Card } from 'antd';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EventsCard from '../../components/EventsCard/eventsCard.component';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './events.css';


import { useSelector } from 'react-redux';

const { useBreakpoint } = Grid;


function EventsSection() {
	const { md } = useBreakpoint();
	return (
		<section className="events-section">
			<div className="events-section-container">
				<Row className="events-section-head-row">
					<div className="events-section-head">
						<h1>Events</h1>
						<hr />
					</div>

				</Row>

				<Row justify="end">
					<Button type="primary" htmlType="submit" href="/events/create_event_1">
						Create an Event
                </Button>
				</Row>

				<div className="prof-menu-container">
					<Menu theme="light" mode="horizontal" defaultSelectedKeys={["events"]}>
						<Menu.Item key="All events" >
							<Link to="/about/director"><h1>All Events</h1></Link>
						</Menu.Item>
						<Menu.Item key="webinars" >
							<Link to="/about/director"><h1>Webinars</h1></Link>
						</Menu.Item>
						<Menu.Item key="reunions" >
							<Link to="/about/director"><h1>Reunions</h1></Link>
						</Menu.Item>
					</Menu>
				</div>
				<br></br> <br></br>





				<Row className="events-section-items-row">
					<Col
						span={md ? 12 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
					<Col
						span={md ? 12 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
				</Row>

				<Row className="events-section-items-row">
					<Col
						span={md ? 12 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
					<Col
						span={md ? 12 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
				</Row>

				<Row className="events-section-items-row">
					<Col
						span={md ? 12 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
					<Col
						span={md ? 12 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
				</Row>



			</div>
		</section>
	);
}


export default EventsSection;
