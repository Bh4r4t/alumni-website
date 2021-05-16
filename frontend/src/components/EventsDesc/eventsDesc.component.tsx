import { useState, useEffect } from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAnEvent } from '../../services/api/event';
import './eventsDesc.component.css';

function EventDesc(props: any) {
	const user = useSelector((state: any) => state.authReducer.user);
	const location = useLocation();
	const [event, setEvent] = useState<any>(null);
	const eventId: string = location.state as string;

	useEffect(() => {
		const fetchEvent = async (eventId: string) => {
			try {
				const event = await getAnEvent(eventId, user.token);
				if (event?.data?.error) {
					throw new Error(event?.data?.message);
				} else {
					setEvent(event);
				}
			} catch (err) {
				console.log(err.message);
			}
		};
		fetchEvent(eventId);
	}, []);
	return (
		<div className="eventDescriptionContainer">
			<Card className="eventDescription-card">
				<div className="eventDescription-head">
					<h1>Title</h1>
				</div>
			</Card>
		</div>
	);
}

/*
address: "Ropar"
created_by: "user"
created_by_id: "607eedc1e1390b7e9b5cbcaa"
date_created: 1620198989556
event_category: "All Events"
event_description: "Dear Alumni members, It is our pleasure to invite you all for our ALUMNI MEET at IIT ROPAR Permanent Campus."
event_end_time: "10:00 pm"
event_name: "Event 1"
event_time: "08:00 pm"
event_venue: "IIT Ropar"
pending: false 
*/

export default EventDesc;
