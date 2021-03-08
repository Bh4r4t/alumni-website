import { useState } from 'react';
import { Row, Col, Card, Form, Input, Button, Alert } from 'antd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import './contactUs.css';
import TextArea from 'antd/lib/input/TextArea';

function ContactUs() {
	const [isLoading, setLoading] = useState(false);
	const [errors, setErrors] = useState('');

	const handleSubmit = async (payload: any) => {
		try {
			setLoading(true);
			// TODO: API call and send data to backend
			setLoading(false);
		} catch (err) {
			setErrors(err.message);
			setLoading(false);
		}
	};

	const [form] = Form.useForm();

	return (
		<div className="container">
			<div className="body">
				<div className="head">
					<h1>Contact Us</h1>
					<hr />
				</div>
				<div className="details">
					<p>
						{' '}
						Our Alumni Relations representatives are available
						Monday – Friday, 9 AM – 5 PM IST, to assist with any
						inquiries. If you have any query, let us know through
						the form below.{' '}
					</p>
				</div>
				<div className="contact-methods">
					<Row>
						<Col>
							<Card>
								<div className="card-head">
									<MailOutlineIcon
										style={{
											fontSize: 25,
											color: '#375997',
										}}
									/>
									<h2> Message Us </h2>
								</div>
								<p>
									Send us a message at{' '}
									<a href="mailto:alumni@iitrpr.ac.in">
										alumni@iitrpr.ac.in
									</a>{' '}
									or via the form below
								</p>
							</Card>
						</Col>
						<Col>
							<Card>
								<div className="card-head">
									<LocationOnOutlinedIcon
										style={{
											fontSize: 25,
											color: '#375997',
										}}
									/>
									<h2>Visit us at Office</h2>
								</div>
								<p>
									We’d love to see you whenever you’re on
									campus.
								</p>
							</Card>
						</Col>
					</Row>
				</div>
				<hr />
				<div className="query-form">
					<Form
						layout="vertical"
						form={form}
						autoComplete="off"
						onFinish={handleSubmit}
					>
						<Row>
							<Col>
								<Form.Item
									name="firstname"
									label="First Name"
									rules={[
										{
											required: true,
											message:
												'Please input your Firstname!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col>
								<Form.Item
									name="lastname"
									label="Last Name"
									rules={[
										{
											required: false,
											message:
												'Please input your lastname!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Item
									name="email"
									label="Email Id"
									rules={[
										{
											required: true,
											message: 'Please input your email!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col>
								<Form.Item
									name="contactno"
									label="Contact No."
									rules={[
										{
											required: false,
											message: 'Please input your contact no.!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Form.Item
							name="subject"
							label="Subject"
							rules={[
								{
									required: true,
									message: 'Please type your subject!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="message"
							label="Message"
							rules={[
								{
									required: true,
									message: 'Please type your message!',
								},
							]}
						>
							<TextArea rows={4} />
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								loading={isLoading}
							>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
