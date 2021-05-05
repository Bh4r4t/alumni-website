import { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, AutoComplete } from 'antd';
import codes from '../../assets/country_codes';

function ContactsMenu(props: any) {
	const [ccode, setCCode] = useState('');
	const { Option } = Select;

	const handleSubmit = () => {};
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 7 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 24 },
		},
	};

	const [contactForm] = Form.useForm();
	return (
		<div className="profileupdate-menu-wrapper">
			<div className="profileupdate-menu-head">
				<h1>Location and Contact Information</h1>
				<span>
					Please update your current location and contact details
				</span>
			</div>
			<hr />
			<Form
				className="signupCreate-form"
				form={contactForm}
				name="locationInfo"
				{...formItemLayout}
				onFinish={handleSubmit}
				labelAlign="left"
				initialValues={{ prefix: '91' }}
				scrollToFirstError
			>
				<Form.Item
					name="current_city"
					label="Current City"
					rules={[
						{
							required: true,
							message: 'Please select your current city',
						},
					]}
				>
					<Input placeholder="Current city" />
				</Form.Item>

				<Form.Item name="home_town" label="Home Town">
					<Input placeholder="Home town" />
				</Form.Item>
				<div className="profileupdate-submenu-head">
					<h2>Address for correspondence</h2>
				</div>
				<hr />
				<Form.Item name="corrs_address" label="Address">
					<Input placeholder="Correspondence Address" />
				</Form.Item>
				<Form.Item name="corrs_location" label="Location">
					<Input placeholder="Correspondence Location" />
				</Form.Item>
				<Form.Item name="corrs_postal_code" label="Postal Code">
					<Input placeholder="postal code" />
				</Form.Item>
				<div className="profileupdate-submenu-head">
					<h2>Contact Details</h2>
				</div>
				<hr />
				<Form.Item
					name="mobile_num"
					label="Mobile No."
					rules={[
						{
							required: true,
							message: 'Please input your mobile number!',
						},
						{
							max: 10,
							message: 'Input valid Mobile Number',
						},
					]}
				>
					<div className="mobile-num">
						<Input.Group compact>
							<Select
								showSearch
								className="mobile-num-selector"
								placeholder="Country"
								style={{ width: '20%' }}
								onChange={(val: string) => setCCode(codes[val])}
							>
								{Object.entries(codes).map(([key, val]) => (
									<Option key={key} value={key}>
										<>
											{[
												key,
												['(', val, ')'].join(''),
											].join(' ')}
										</>
									</Option>
								))}
							</Select>
							<Input
								placeholder="0123456789"
								style={{ width: '70%' }}
							/>
						</Input.Group>
					</div>
				</Form.Item>
				<Form.Item name="home_phone_num" label="Home Phone No.">
					<div className="mobile-num">
						<Input.Group compact>
							<Select
								showSearch
								className="mobile-num-selector"
								placeholder="Country"
								style={{ width: '20%' }}
								onChange={(val: string) => setCCode(codes[val])}
							>
								{Object.entries(codes).map(([key, val]) => (
									<Option key={key} value={key}>
										<>
											{[
												key,
												['(', val, ')'].join(''),
											].join(' ')}
										</>
									</Option>
								))}
							</Select>
							<Input
								placeholder="0123456789"
								style={{ width: '70%' }}
							/>
						</Input.Group>
					</div>
				</Form.Item>
				<Form.Item name="work_phone_num" label="Work Phone No.">
					<div className="mobile-num">
						<Input.Group compact>
							<Select
								showSearch
								className="mobile-num-selector"
								placeholder="Country"
								style={{ width: '20%' }}
								onChange={(val: string) => setCCode(codes[val])}
							>
								{Object.entries(codes).map(([key, val]) => (
									<Option key={key} value={key}>
										<>
											{[
												key,
												['(', val, ')'].join(''),
											].join(' ')}
										</>
									</Option>
								))}
							</Select>
							<Input
								placeholder="0123456789"
								style={{ width: '70%' }}
							/>
						</Input.Group>
					</div>
				</Form.Item>
				<Form.Item
					name="alternate_email"
					label="Alternate Email Id"
					rules={[
						{
							type: 'email',
							message: 'Please Enter valid Email Address',
						},
					]}
				>
					<Input />
				</Form.Item>
				<div className="profileupdate-submenu-head">
					<h2>Social Profiles</h2>
				</div>
				<hr />
				<Form.Item name="website" label="Website/Portfolio/Blog">
					<Input />
				</Form.Item>
				<Form.Item name="facebook" label="Facebook Profile">
					<Input />
				</Form.Item>
				<Form.Item name="linkedIn" label="LinkedIn Profile">
					<Input />
				</Form.Item>
				<Form.Item name="twitter" label="Twitter Profile">
					<Input />
				</Form.Item>
				<Form.Item name="youtube" label="Youtube Profile">
					<Input />
				</Form.Item>
				<Form.Item name="instagram" label="Instagram Profile">
					<Input />
				</Form.Item>
				<div className="signupCreate-form-submit-button-div">
					<Form.Item className="profileupdate-form-submit">
						<Button
							type="primary"
							htmlType="submit"
							loading={props.isLoading}
						>
							Submit
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
}

export default ContactsMenu;