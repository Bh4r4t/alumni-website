import { useState } from 'react';
import {
	Form,
	Input,
	Button,
	Radio,
	DatePicker,
	Select,
	AutoComplete,
} from 'antd';
import codes from '../../assets/country_codes';

function BasicProfileMenu(props: any) {
	const [form] = Form.useForm();
	const [, setSalut] = useState();
	const [ccode, setCCode] = useState('');
	const salutation_dict: { [id: string]: string } = {
		1: 'Mr',
		2: 'Ms',
		3: 'Dr',
		4: 'Prof',
		5: 'Other',
	};
	const [, setGender] = useState();
	const gender_dict: { [id: string]: string } = {
		1: 'Male',
		2: 'Female',
		3: 'Prefer not to say',
	};
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

	return (
		<div className="profileupdate-menu-wrapper">
			<div className="profileupdate-menu-head">
				<h1>Basic profile</h1>
				<span>Please update profile details below</span>
			</div>
			<hr />
			<div className="profileupdate-menu-form">
				<Form
					className="signupCreate-form"
					form={form}
					name="basicProfile"
					{...formItemLayout}
					onFinish={handleSubmit}
					labelAlign="left"
					initialValues={{ prefix: '91' }}
					scrollToFirstError
				>
					<Form.Item name="salutation" label="Salutation">
						<Radio.Group
							onChange={(e) => {
								setSalut(e.target.value);
							}}
						>
							<Radio value={1}>Mr</Radio>
							<Radio value={2}>Ms</Radio>
							<Radio value={3}>Dr</Radio>
							<Radio value={4}>Prof</Radio>
							<Radio value={5}>Other</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						name="first_name"
						label="First Name"
						rules={[
							{
								required: true,
								message: 'Please input your First Name',
							},
						]}
					>
						<Input placeholder="First Name" />
					</Form.Item>

					<Form.Item
						name="last_name"
						label="Last Name"
						rules={[
							{
								required: true,
								message: 'Please input your Last Name',
							},
						]}
					>
						<Input placeholder="Last Name" />
					</Form.Item>

					<Form.Item
						name="gender"
						label="Gender"
						rules={[{ required: true }]}
					>
						<Radio.Group
							onChange={(e) => setGender(e.target.value)}
						>
							<Radio value={1}>Male</Radio>
							<Radio value={2}>Female</Radio>
							<Radio value={3}>Prefer not to say</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						name="date_of_birth"
						label="Date of Birth"
						rules={[
							{
								required: true,
								message: 'Please select your DOB!',
							},
						]}
					>
						<DatePicker />
					</Form.Item>
					<Form.Item
						name="mobile_num"
						label="Mobile No."
						rules={[
							{
								required: true,
								message: 'Please input your mobile number!',
							},
						]}
					>
						<div className="mobile-num">
							<Input.Group compact>
								<Select
									showSearch
									className="mobile-num-selector"
									placeholder="--"
									style={{ width: '20%' }}
									onChange={(val: string) =>
										setCCode(codes[val])
									}
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
						name="current_city"
						label="Current City"
						rules={[
							{
								required: true,
								message: 'Please select your current city!',
							},
						]}
					>
						<AutoComplete
							className="city-search-autocomplete"
							placeholder="Type to search"
						/>
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
		</div>
	);
}

export default BasicProfileMenu;
