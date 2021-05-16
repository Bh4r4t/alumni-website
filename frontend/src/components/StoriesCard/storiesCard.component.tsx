import { Card } from 'antd';
import './storiesCard.component.css';
import DummyNewsImg from '../../assets/dummy_news.jpg';

// function StoriesCard(props: any) {
// 	const linkText: string = props.title;
// 	return (
// 		<Card className="stories-items-card">
// 			<div className="stories-items-card-items">
// 				<a href="/">
// 					<img src={props.thumbnail} />
// 					<div className="story-link">
// 						<span>{linkText}</span>
// 					</div>
// 				</a>
// 			</div>
// 		</Card>
// 	);
// }

function StoriesCard(props: any) {
	const linkText: string = 'Welcome to new the alumni website';
	return (
		<Card className="stories-items-card">
			<div className="stories-items-card-items">
				<a href="/">
					<img src={DummyNewsImg} />
					<div className="story-link">
						<span>{linkText}</span>
					</div>
				</a>
			</div>
		</Card>
	);
}

export default StoriesCard;
