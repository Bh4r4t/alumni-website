import { useState } from 'react';
import { Menu, Affix, Card, Row, Col, Grid } from 'antd';
import './profileInfo.component.css';
import BasicProfileMenu from '../profileUpdateComponents/basicProfile.component';
import ContactsMenu from '../profileUpdateComponents/contacts.component';
import EducationalMenu from '../profileUpdateComponents/educational.component';
import ProfessionalMenu from '../profileUpdateComponents/professional.component';
import AttachmentsMenu from '../profileUpdateComponents/attachments.component';
import AccountDetailMenu from '../profileUpdateComponents/accountDetails.component';
import { useHistory } from 'react-router-dom';
import { ProfileMenuMap } from './menuMap';
import SocialAccountMenu from '../profileUpdateComponents/socialAccount.component';

const { useBreakpoint } = Grid;

function ProfileInfo() {
	const { md } = useBreakpoint();
	const [menu, setMenu] = useState(1);

	const menuItemClickHandler = (key: any) => () => {
		setMenu(key);
	};

	const menuItems = (
		<>
			<Menu.Item key="1" onClick={menuItemClickHandler(1)}>
				Basic Profile
			</Menu.Item>
			<Menu.Item key="2" onClick={menuItemClickHandler(2)}>
				Location & Contact details
			</Menu.Item>
			<Menu.Item key="3" onClick={menuItemClickHandler(3)}>
				Educational Detail
			</Menu.Item>
			<Menu.Item key="4" onClick={menuItemClickHandler(4)}>
				Work / Professional Details
			</Menu.Item>
			<Menu.Item key="5" onClick={menuItemClickHandler(5)} disabled>
				Achievements
			</Menu.Item>
			<Menu.Item key="6" onClick={menuItemClickHandler(6)}>
				Resume & Attachments
			</Menu.Item>
			<Menu.Item key="7" onClick={menuItemClickHandler(7)}>
				Account Details
			</Menu.Item>
			<Menu.Item key="8" onClick={menuItemClickHandler(8)}>
				Social Connections
			</Menu.Item>
			<Menu.Item key="9" onClick={menuItemClickHandler(9)} disabled>
				Additional Details
			</Menu.Item>
		</>
	);

	const fixedMenu = (
		<div className="profile-details-sidemenu-wrapper">
			<Menu className="profile-details-sidemenu" mode="inline">
				{menuItems}
			</Menu>
		</div>
	);

	return (
		<div className="profile-details-wrapper">
			<Row className="profile-details-container">
				<Col
					span={md ? 7 : 24}
					className="profile-details-sidemenu-col"
				>
					{fixedMenu}
				</Col>
				<Col
					span={md ? 17 : 24}
					className="profile-details-display-col"
				>
					<Card className="profile-details-display-card">
						{getCurrentMenu(menu)}
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default ProfileInfo;

function getCurrentMenu(menu: number) {
	switch (menu) {
		case 1:
			return <BasicProfileMenu />;
		case 2:
			return <ContactsMenu />;
		case 3:
			return <EducationalMenu />;
		case 4:
			return <ProfessionalMenu />;
		case 5:
		case 6:
			return <AttachmentsMenu />;
		case 7:
			return <AccountDetailMenu />;
		case 8:
			return <SocialAccountMenu />;
		case 9:
		default:
			return null;
	}
}
