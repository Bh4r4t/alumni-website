import { Row, Col, Grid, Card } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import EventsCard from '../../components/EventsCard/eventsCard.component';
import StoriesCard from '../../components/StoriesCard/storiesCard.component';
import './homePage.css';
import img1 from '../../assets/landingpage/img1.jpg';
import img2 from '../../assets/landingpage/img2.jpg';
import { useSelector } from 'react-redux';

const { useBreakpoint } = Grid;

function Home() {
	const user = useSelector((state: any) => state.authReducer.user);
	return (
		<div className="homepage">
			<ImgCarousel />
			<AlumniStats />
			<EventsSection />
			<LatestStories />
			{!user ? <GetConnected /> : null}
		</div>
	);
}

function ImgCarousel() {
	const configurableProps = {
		showArrows: true,
		showStatus: false,
		showThumbs: false,
		showIndicators: true,
		infiniteLoop: true,
		useKeyboardArrows: true,
		autoPlay: true,
		stopOnHover: true,
		swipeable: true,
		dynamicHeight: true,
		emulateTouch: true,
		autoFocus: false,
		thumbWidth: 100,
		selectedItem: 0,
		interval: 2000,
		transitionTime: 500,
		swipeScrollTolerance: 5,
	};

	return (
		<section className="imgcarousel-section">
			<div />
			<div className="imgcarousel-container">
				<Card className="imgCarousel-card">
					<Carousel {...configurableProps}>
						<div className="carousal-card">
							<img src={img1} />
							<h1 className="legend" style={{ fontSize: '2em' }}>
								{' '}
								Welcome{' '}
							</h1>
						</div>
						<div className="carousal-card">
							<img src={img2} />
							<p> Welcome 2 </p>
						</div>
					</Carousel>
				</Card>
			</div>
		</section>
	);
}

function AlumniStats() {
	const { md } = useBreakpoint();
	const Items = (val?: string, key?: string) => (
		<Col
			span={md ? 8 : 24}
			className="alumnistats-section-items-row-2-items"
		>
			<div className="val">{val}</div>
			<div className="key">{key}</div>
		</Col>
	);

	return (
		<section className="alumnistats-section">
			<div className="alumnistats-section-container">
				<Row className="alumnistats-section-row">
					<Col span={24} className="alumnistats-section-col">
						<Row className="alumnistats-section-items-row-1">
							<Col
								span={24}
								className="alumnistats-section-items-row-1-col"
							>
								<span>Our Alumni Network</span>
							</Col>
						</Row>
						<Row className="alumnistats-section-items-row-2">
							{Items('20', 'countries')}
							{Items('4,888', 'total Alumni')}
							{Items('114', 'Organizations')}
						</Row>
					</Col>
				</Row>
			</div>
		</section>
	);
}

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
				<Row className="events-section-items-row">
					<Col
						span={md ? 8 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
					<Col
						span={md ? 8 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
					<Col
						span={md ? 8 : 24}
						className="events-section-items-col"
					>
						<EventsCard />
					</Col>
				</Row>
				<Row className="events-section-more-row">
					<a className="events-section-more">Explore More Events</a>
				</Row>
			</div>
		</section>
	);
}

function LatestStories() {
	const { md } = useBreakpoint();
	return (
		<section className="latestStories-section">
			<div className="latestStories-section-container">
				<Row className="events-section-head-row">
					<div className="events-section-head">
						<h1>Latest Stories</h1>
						<hr />
					</div>
				</Row>
				<Row className="latestStories-section-items-row">
					<Col
						span={md ? 7 : 24}
						className="latestStories-section-items-col"
					>
						<StoriesCard />
					</Col>
					<Col
						span={md ? 7 : 24}
						className="latestStories-section-items-col"
					>
						<StoriesCard />
					</Col>
					<Col
						span={md ? 7 : 24}
						className="latestStories-section-items-col"
					>
						<StoriesCard />
					</Col>
				</Row>
				<Row className="events-section-more-row">
					<a className="events-section-more">View More Stories</a>
				</Row>
			</div>
		</section>
	);
}

function GetConnected() {
	const { md } = useBreakpoint();
	return (
		<section className="getconnected-section">
			<Row className="getconnected-section-row">
				<Col span={md ? 16 : 24} className="getconnected-section-col">
					<span>Stay Connected with your Alumni Network</span>
					<a>Join today</a>
				</Col>
			</Row>
		</section>
	);
}

export default Home;
